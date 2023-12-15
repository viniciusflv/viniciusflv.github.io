export const glueAws = {
  "tag": "svg",
  "props": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 24 24"
  },
  "children": [
    {
      "tag": "defs",
      "props": {},
      "children": [
        {
          "tag": "linearGradient",
          "props": {
            "id": "a",
            "x1": "0%",
            "x2": "100%",
            "y1": "100%",
            "y2": "0%"
          },
          "children": [
            {
              "tag": "stop",
              "props": {
                "offset": "0%",
                "stopColor": "#4D27A8"
              }
            },
            {
              "tag": "stop",
              "props": {
                "offset": "100%",
                "stopColor": "#A166FF"
              }
            }
          ]
        }
      ]
    },
    {
      "tag": "g",
      "props": {
        "fill": "none",
        "fillRule": "evenodd",
        "stroke": "none",
        "strokeWidth": "1"
      },
      "children": [
        {
          "tag": "path",
          "props": {
            "fill": "url(#a)",
            "d": "M0 0H24V24H0z"
          }
        },
        {
          "tag": "path",
          "props": {
            "fill": "#FFF",
            "d": "M12.509 18.003V16.5h-1.002v1.497l-.602-.798-.799.602 1.507 2a.504.504 0 0 0 .401.199h.001a.498.498 0 0 0 .4-.201l1.496-2-.801-.598-.601.802Zm2.618-7.878c-1.123.26-2.457.363-3.127.363-.67 0-2-.103-3.121-.361l2.543 3.773c.056.083.085.18.085.28v.908c.314.053.705.054 1.002.006v-.914c0-.099.029-.196.085-.279l2.533-3.776Zm1.785-.872.003.002-3.405 5.077v1.139a.5.5 0 0 1-.296.456c-.314.14-.742.201-1.17.201-.459 0-.915-.071-1.223-.192a.5.5 0 0 1-.315-.465v-1.139l-3.42-5.076.002-.002A.548.548 0 0 1 7 8.977c0-.322 0-.992 3.469-1.139l.043.999c-.864.037-1.477.111-1.892.187.763.227 2.028.464 3.38.464 1.279 0 2.479-.212 3.25-.426a8.161 8.161 0 0 0-.775-.096l.074-.997C16.176 8.09 17 8.429 17 8.977a.535.535 0 0 1-.088.276ZM9.003 7h1.002a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H9.003a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5Zm2.504 1.5v-1a.5.5 0 0 1 .501-.5h1.002a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1.002a.5.5 0 0 1-.5-.5Z"
          }
        }
      ]
    }
  ]
}