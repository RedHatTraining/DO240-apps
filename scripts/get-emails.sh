#!/bin/bash

POD_NAME=$(oc get pods --selector=app=smtp -o=jsonpath='{.items[0].metadata.name}')
POD_LOGS=$(oc logs $POD_NAME)

echo "$POD_LOGS"
