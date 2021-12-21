#!/bin/bash

oc get service --all-namespaces -o json  | jq '.items[]
 | select(
    .metadata.labels."discovery.3scale.net" == "true"
    and .metadata.annotations."discovery.3scale.net/port"
    and .metadata.annotations."discovery.3scale.net/scheme"
   )
 | {
     "service-name": .metadata.name,
     "service-namespace": .metadata.namespace,
     "labels": .metadata.labels,
     "annotations": .metadata.annotations
   } '

