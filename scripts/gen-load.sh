#!/bin/bash

# Basic script to generate GET request to a URL

REQUESTS=$1
URL=$2

OK=$(for i in `seq 1 $REQUESTS`; do 
    curl -s -o /dev/null  -w "%{http_code}\n" "$URL"
done | grep 200 | wc -l)

echo "$OK/$REQUESTS completed requests to $URL"

