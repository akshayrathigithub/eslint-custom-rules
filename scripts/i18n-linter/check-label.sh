#!/bin/bash

github_labels=$(jq --raw-output '.[] .name' <<<'${{ toJson(github.event.pull_request.labels) }}')

ignore_label_found=false

# Check if the 'ignore-i18n-linter' label is present
while IFS= read -r line; do
    if [ "$line" = "ignore-i18n-linter" ]; then
        ignore_label_found=true
        break
    fi
done <<<"$github_labels"

if [ "$ignore_label_found" = true ]; then
    echo "Linter ignore label found, exiting further process gracefully"
    echo "label_found=true" >>$GITHUB_OUTPUT
    exit 0
else
    echo "No linter ignore label found, linter will proceed now."
    echo "label_found=false" >>$GITHUB_OUTPUT
fi
