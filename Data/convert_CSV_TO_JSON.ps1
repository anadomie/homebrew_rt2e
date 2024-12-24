# Define the path to the input CSV file and output JSON file
$InputCsv = "Character Builder Databse - Roles.csv"  # Replace with your CSV file path
$OutputJson = "output.json"  # Replace with your desired JSON file path

# Import the CSV file
$CsvData = Import-Csv -Path $InputCsv

if (-not $CsvData) {
    Write-Host "Error: The CSV file is empty or could not be loaded."
    exit
}

# Check the contents of the first row
$FirstRow = $CsvData[0]
if (-not $FirstRow) {
    Write-Host "Error: The CSV file does not contain any data rows."
    exit
}

# Debug the detected headers
$Headers = $FirstRow.PSObject.Properties | ForEach-Object { $_.Name }
Write-Host "Detected headers: $($Headers -join ', ')"

$FirstColumnName = $Headers[0]
if (-not $FirstColumnName) {
    Write-Host "Error: Could not determine the first column name."
    exit
}
Write-Host "Detected first column name: $FirstColumnName"

# Initialize a hashtable to store objects keyed by the first column's value
$ProcessedData = @{}

foreach ($Row in $CsvData) {
    $Key = $Row.$FirstColumnName
    if (-not $Key) {
        Write-Host "Warning: Row does not have a value for the first column."
        continue
    }

    $ProcessedRow = @{}
    foreach ($Column in $Row.PSObject.Properties) {
        $ColumnName = $Column.Name
        $ColumnValue = $Column.Value

        # Skip the first column to avoid including it as a property
        if ($ColumnName -eq $FirstColumnName) {
            continue
        }

        # Split columns with '|' into arrays
        if ($ColumnValue -match "\|") {
            $ProcessedRow[$ColumnName] = $ColumnValue -split "\|"
        } else {
            $ProcessedRow[$ColumnName] = $ColumnValue
        }
    }

    # Add the processed row to the hashtable
    $ProcessedData[$Key] = $ProcessedRow
}


# Convert the processed data to JSON
$JsonOutput = $ProcessedData | ConvertTo-Json -Depth 10 -Compress

# Save the JSON to the output file with UTF8 encoding
[System.Text.Encoding]::UTF8.GetBytes($JsonOutput) | Set-Content -Path $OutputJson -Encoding Byte

Write-Host "CSV file has been converted to JSON and saved to $OutputJson."