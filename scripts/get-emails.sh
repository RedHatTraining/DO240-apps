#!/bin/bash
T_SCALE_PROJECT="3scale"
POD_NAME=$(oc get pods --selector=app=smtp -o=jsonpath='{.items[0].metadata.name}' -n $T_SCALE_PROJECT)
POD_LOGS=$(oc logs $POD_NAME -n $T_SCALE_PROJECT)

echo "$POD_LOGS"
