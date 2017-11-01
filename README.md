#MetaDataJS

GET /
Return twig template with exifsInfo (notice the "s" at exifs) object

```json
[
  {
    "data": [
      {
        "SourceFile": "public/images/prju13u8j9fx1trg.jpg",
        "ExifToolVersion": 10.62,
        "Keywords": [
          "keywordA",
          "keywordB"
        ],
        "ApplicationRecordVersion": 4,
        "ImageSize": "800x533",
        "Megapixels": 0.426
      }
    ],
    "error": null
  },
  {
    "data": [
      {
        "SourceFile": "public/images/prju13u8j9fx1tri.jpg",
        "ExifToolVersion": 10.62,
        "Orientation": "Horizontal (normal)",
        "XResolution": 72,
        "YResolution": 72,
        "ResolutionUnit": "inches",
        "YCbCrPositioning": "Centered",
        "ExifVersion": "0231",
        "ComponentsConfiguration": "Y, Cb, Cr, -",
        "FlashpixVersion": "0100",
        "ColorSpace": "sRGB",
        "ExifImageWidth": 800,
        "ExifImageHeight": 489,
        "XMPToolkit": "XMP Core 5.1.2",
        "Title": "Dallas Skyline at dusk",
        "Creator": "Drumguy8800",
        "Subject": [
          "dallas",
          "dusk",
          "skyline",
          "texas"
        ],
        "Description": "Dallas was founded in 1841 and formally incorporated as a city in February 1856. The city's economy is primarily based on banking, commerce, telecommunications, computer technology, energy, healthcare and medical research, transportation and logistics. The city is home to the third largest concentration of Fortune 500 companies in the nation. Located in North Texas, Dallas is the main core of the largest inland metropolitan area in the United States that lacks any navigable link to the sea.",
        "Rights": "GNU Free Documentation License",
        "Country": "USA",
        "State": "Texas",
        "CreatorWorkURL": "http://en.wikipedia.org/wiki/User:Drumguy8800/Gallery",
        "UsageTerms": "http://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License_1.2",
        "ProfileCMMType": "Lino",
        "ProfileVersion": "2.1.0",
        "ProfileClass": "Display Device Profile",
        "ColorSpaceData": "RGB ",
        "ProfileConnectionSpace": "XYZ ",
        "ProfileDateTime": "1998:02:09 06:49:00",
        "ProfileFileSignature": "acsp",
        "PrimaryPlatform": "Microsoft Corporation",
        "CMMFlags": "Not Embedded, Independent",
        "DeviceManufacturer": "IEC ",
        "DeviceModel": "sRGB",
        "DeviceAttributes": "Reflective, Glossy, Positive, Color",
        "RenderingIntent": "Media-Relative Colorimetric",
        "ConnectionSpaceIlluminant": "0.9642 1 0.82491",
        "ProfileCreator": "HP  ",
        "ProfileID": 0,
        "ProfileCopyright": "Copyright (c) 1998 Hewlett-Packard Company",
        "ProfileDescription": "sRGB IEC61966-2.1",
        "MediaWhitePoint": "0.95045 1 1.08905",
        "MediaBlackPoint": "0 0 0",
        "RedMatrixColumn": "0.43607 0.22249 0.01392",
        "GreenMatrixColumn": "0.38515 0.71687 0.09708",
        "BlueMatrixColumn": "0.14307 0.06061 0.7141",
        "DeviceMfgDesc": "IEC http://www.iec.ch",
        "DeviceModelDesc": "IEC 61966-2.1 Default RGB colour space - sRGB",
        "ViewingCondDesc": "Reference Viewing Condition in IEC61966-2.1",
        "ViewingCondIlluminant": "19.6445 20.3718 16.8089",
        "ViewingCondSurround": "3.92889 4.07439 3.36179",
        "ViewingCondIlluminantType": "D50",
        "Luminance": "76.03647 80 87.12462",
        "MeasurementObserver": "CIE 1931",
        "MeasurementBacking": "0 0 0",
        "MeasurementGeometry": "Unknown",
        "MeasurementFlare": "0.999%",
        "MeasurementIlluminant": "D65",
        "Technology": "Cathode Ray Tube Display",
        "RedTRC": "(Binary data 2060 bytes, use -b option to extract)",
        "GreenTRC": "(Binary data 2060 bytes, use -b option to extract)",
        "BlueTRC": "(Binary data 2060 bytes, use -b option to extract)",
        "CodedCharacterSet": "UTF8",
        "ApplicationRecordVersion": 2,
        "By-line": "Drumguy8800",
        "Headline": "Dallas Skyline at dusk",
        "Source": "http://commons.wikimedia.org/wiki/File:Xvisionx_Dallas_Stemmons.jpg",
        "Caption-Abstract": "Dallas was founded in 1841 and formally incorporated as a city in February 1856. The city's economy is primarily based on banking, commerce, telecommunications, computer technology, energy, healthcare and medical research, transportation and logistics. The city is home to the third largest concentration of Fortune 500 companies in the nation. Located in North Texas, Dallas is the main core of the largest inland metropolitan area in the United States that lacks any navigable link to the sea.",
        "Credit": "Wikimedia Commons",
        "DateCreated": "2013:07:23",
        "CopyrightNotice": "GNU Free Documentation License",
        "Keywords": [
          "dallas",
          "dusk",
          "skyline",
          "texas"
        ],
        "TimeCreated": "20:40:36+02:00",
        "Province-State": "Texas",
        "ObjectName": "Dallas Skyline at dusk",
        "City": "Dallas",
        "Country-PrimaryLocationName": "USA",
        "DateTimeCreated": "2013:07:23 20:40:36+02:00",
        "DateTimeOriginal": "2013:07:23 20:40:36+02:00",
        "ImageSize": "800x489",
        "Megapixels": 0.391
      }
    ],
    "error": null
  }
]
```

GET /detail/:id 
:id = uniqid name of the image without extension

```json
{"data":[{"SourceFile":"public/images/prju13u8j9fx1tri.jpg","ExifToolVersion":10.62,"Orientation":"Horizontal (normal)","XResolution":72,"YResolution":72,"ResolutionUnit":"inches","YCbCrPositioning":"Centered","ExifVersion":"0231","ComponentsConfiguration":"Y, Cb, Cr, -","FlashpixVersion":"0100","ColorSpace":"sRGB","ExifImageWidth":800,"ExifImageHeight":489,"XMPToolkit":"XMP Core 5.1.2","Title":"Dallas Skyline at dusk","Creator":"Drumguy8800","Subject":["dallas","dusk","skyline","texas"],"Description":"Dallas was founded in 1841 and formally incorporated as a city in February 1856. The city's economy is primarily based on banking, commerce, telecommunications, computer technology, energy, healthcare and medical research, transportation and logistics. The city is home to the third largest concentration of Fortune 500 companies in the nation. Located in North Texas, Dallas is the main core of the largest inland metropolitan area in the United States that lacks any navigable link to the sea.","Rights":"GNU Free Documentation License","Country":"USA","State":"Texas","CreatorWorkURL":"http://en.wikipedia.org/wiki/User:Drumguy8800/Gallery","UsageTerms":"http://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License_1.2","ProfileCMMType":"Lino","ProfileVersion":"2.1.0","ProfileClass":"Display Device Profile","ColorSpaceData":"RGB ","ProfileConnectionSpace":"XYZ ","ProfileDateTime":"1998:02:09 06:49:00","ProfileFileSignature":"acsp","PrimaryPlatform":"Microsoft Corporation","CMMFlags":"Not Embedded, Independent","DeviceManufacturer":"IEC ","DeviceModel":"sRGB","DeviceAttributes":"Reflective, Glossy, Positive, Color","RenderingIntent":"Media-Relative Colorimetric","ConnectionSpaceIlluminant":"0.9642 1 0.82491","ProfileCreator":"HP  ","ProfileID":0,"ProfileCopyright":"Copyright (c) 1998 Hewlett-Packard Company","ProfileDescription":"sRGB IEC61966-2.1","MediaWhitePoint":"0.95045 1 1.08905","MediaBlackPoint":"0 0 0","RedMatrixColumn":"0.43607 0.22249 0.01392","GreenMatrixColumn":"0.38515 0.71687 0.09708","BlueMatrixColumn":"0.14307 0.06061 0.7141","DeviceMfgDesc":"IEC http://www.iec.ch","DeviceModelDesc":"IEC 61966-2.1 Default RGB colour space - sRGB","ViewingCondDesc":"Reference Viewing Condition in IEC61966-2.1","ViewingCondIlluminant":"19.6445 20.3718 16.8089","ViewingCondSurround":"3.92889 4.07439 3.36179","ViewingCondIlluminantType":"D50","Luminance":"76.03647 80 87.12462","MeasurementObserver":"CIE 1931","MeasurementBacking":"0 0 0","MeasurementGeometry":"Unknown","MeasurementFlare":"0.999%","MeasurementIlluminant":"D65","Technology":"Cathode Ray Tube Display","RedTRC":"(Binary data 2060 bytes, use -b option to extract)","GreenTRC":"(Binary data 2060 bytes, use -b option to extract)","BlueTRC":"(Binary data 2060 bytes, use -b option to extract)","CodedCharacterSet":"UTF8","ApplicationRecordVersion":2,"By-line":"Drumguy8800","Headline":"Dallas Skyline at dusk","Source":"http://commons.wikimedia.org/wiki/File:Xvisionx_Dallas_Stemmons.jpg","Caption-Abstract":"Dallas was founded in 1841 and formally incorporated as a city in February 1856. The city's economy is primarily based on banking, commerce, telecommunications, computer technology, energy, healthcare and medical research, transportation and logistics. The city is home to the third largest concentration of Fortune 500 companies in the nation. Located in North Texas, Dallas is the main core of the largest inland metropolitan area in the United States that lacks any navigable link to the sea.","Credit":"Wikimedia Commons","DateCreated":"2013:07:23","CopyrightNotice":"GNU Free Documentation License","Keywords":["dallas","dusk","skyline","texas"],"TimeCreated":"20:40:36+02:00","Province-State":"Texas","ObjectName":"Dallas Skyline at dusk","City":"Dallas","Country-PrimaryLocationName":"USA","DateTimeCreated":"2013:07:23 20:40:36+02:00","DateTimeOriginal":"2013:07:23 20:40:36+02:00","ImageSize":"800x489","Megapixels":0.391}],"error":null}```
