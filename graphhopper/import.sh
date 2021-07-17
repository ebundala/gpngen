#! /usr/bin/env bash

java -Ddw.graphhopper.datareader.file=tanzania-latest.osm.pbf -jar graphhopper-web-3.0.jar import config.yml
