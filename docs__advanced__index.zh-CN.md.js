(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{WpQk:function(e,n,t){},"dMo/":function(e,n,t){"use strict";var a=t("q1tI"),l=t.n(a),r=t("hKI/"),c=t.n(r);t("WpQk");function i(e,n){return E(e)||d(e,n)||m(e,n)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,n){if(e){if("string"===typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function d(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,l,r=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(a=t.next()).done);c=!0)if(r.push(a.value),n&&r.length===n)break}catch(o){i=!0,l=o}finally{try{c||null==t["return"]||t["return"]()}finally{if(i)throw l}}return r}}function E(e){if(Array.isArray(e))return e}var u=function(e){var n=e.children,t=Object(a["useRef"])(),r=Object(a["useState"])(!1),o=i(r,2),m=o[0],s=o[1],d=Object(a["useState"])(!1),E=i(d,2),u=E[0],p=E[1];return Object(a["useEffect"])((function(){var e=t.current,n=c()((function(){s(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return n(),e.addEventListener("scroll",n),window.addEventListener("resize",n),function(){e.removeEventListener("scroll",n),window.removeEventListener("resize",n)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:t,"data-left-folded":m||void 0,"data-right-folded":u||void 0},l.a.createElement("table",null,n)))};n["a"]=u},wHAn:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=t("dEAq"),c=t("H1Ra"),i=t("dMo/"),o=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u6280\u672f\u6307\u6807"},l.a.createElement(r["AnchorLink"],{to:"#\u6280\u672f\u6307\u6807","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6280\u672f\u6307\u6807"),l.a.createElement("h2",{id:"\u9ed8\u8ba4\u6280\u672f\u6307\u6807"},l.a.createElement(r["AnchorLink"],{to:"#\u9ed8\u8ba4\u6280\u672f\u6307\u6807","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u9ed8\u8ba4\u6280\u672f\u6307\u6807"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{align:"center"},l.a.createElement("strong",null,"\u6307\u6807\u540d")),l.a.createElement("th",{align:"center"},l.a.createElement("strong",null,"\u9ed8\u8ba4\u8ba1\u7b97\u53c2\u6570")),l.a.createElement("th",{align:"center"},l.a.createElement("strong",null,"\u6307\u6807\u540d")),l.a.createElement("th",{align:"center"},l.a.createElement("strong",null,"\u9ed8\u8ba4\u8ba1\u7b97\u53c2\u6570")),l.a.createElement("th",{align:"center"},l.a.createElement("strong",null,"\u6307\u6807\u540d")),l.a.createElement("th",{align:"center"},l.a.createElement("strong",null,"\u9ed8\u8ba4\u8ba1\u7b97\u53c2\u6570")))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"MA"),l.a.createElement("td",{align:"center"},"[5, 10, 30, 60]"),l.a.createElement("td",{align:"center"},"BIAS"),l.a.createElement("td",{align:"center"},"[6, 12, 24]"),l.a.createElement("td",{align:"center"},"VR"),l.a.createElement("td",{align:"center"},"[24, 30]")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"EMA"),l.a.createElement("td",{align:"center"},"[6, 12, 20]"),l.a.createElement("td",{align:"center"},"BRAR"),l.a.createElement("td",{align:"center"},"[26]"),l.a.createElement("td",{align:"center"},"WR"),l.a.createElement("td",{align:"center"},"[6, 10, 14]")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"SMA"),l.a.createElement("td",{align:"center"},"[12, 2]"),l.a.createElement("td",{align:"center"},"CCI"),l.a.createElement("td",{align:"center"},"[13]"),l.a.createElement("td",{align:"center"},"MTM"),l.a.createElement("td",{align:"center"},"[6, 10]")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"BBI"),l.a.createElement("td",{align:"center"},"[3, 6, 12, 24]"),l.a.createElement("td",{align:"center"},"DMI"),l.a.createElement("td",{align:"center"},"[14, 6]"),l.a.createElement("td",{align:"center"},"EMV"),l.a.createElement("td",{align:"center"},"[14, 9]")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"VOL"),l.a.createElement("td",{align:"center"},"[5, 10, 20]"),l.a.createElement("td",{align:"center"},"CR"),l.a.createElement("td",{align:"center"},"[26, 10, 20, 40, 60]"),l.a.createElement("td",{align:"center"},"SAR"),l.a.createElement("td",{align:"center"},"[2, 2,\xa0 20]")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"MACD"),l.a.createElement("td",{align:"center"},"[12, 26, 9]"),l.a.createElement("td",{align:"center"},"PSY"),l.a.createElement("td",{align:"center"},"[12, 6]"),l.a.createElement("td",{align:"center"},"AO"),l.a.createElement("td",{align:"center"},"[5, 34]")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"BOLL"),l.a.createElement("td",{align:"center"},"[20]"),l.a.createElement("td",{align:"center"},"DMA"),l.a.createElement("td",{align:"center"},"[10, 50, 10]"),l.a.createElement("td",{align:"center"},"ROC"),l.a.createElement("td",{align:"center"},"[12, 6]")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"KDJ"),l.a.createElement("td",{align:"center"},"[9, 3, 3]"),l.a.createElement("td",{align:"center"},"TRIX"),l.a.createElement("td",{align:"center"},"[12, 20]"),l.a.createElement("td",{align:"center"},"PVT"),l.a.createElement("td",{align:"center"},"\u65e0")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"RSI"),l.a.createElement("td",{align:"center"},"[6, 12, 24]"),l.a.createElement("td",{align:"center"},"OBV"),l.a.createElement("td",{align:"center"},"[30]"),l.a.createElement("td",{align:"center"},"AVP"),l.a.createElement("td",{align:"center"},"\u65e0")))),l.a.createElement("h2",{id:"\u6280\u672f\u6307\u6807\u6a21\u677f"},l.a.createElement(r["AnchorLink"],{to:"#\u6280\u672f\u6307\u6807\u6a21\u677f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6280\u672f\u6307\u6807\u6a21\u677f"),l.a.createElement("p",null,"\u60f3\u8981\u5b8c\u6210\u4e00\u4e2a\u81ea\u5b9a\u4e49\u6280\u672f\u6307\u6807\uff0c\u53ea\u9700\u8981\u751f\u6210\u4e00\u4e2a\u6280\u672f\u6307\u6807\u4fe1\u606f\uff0c\u7136\u540e\u901a\u8fc7",l.a.createElement("code",null,"extension.addTechnicalIndicatorTemplate"),"\u5168\u5c40\u6dfb\u52a0\uff0c\u6216\u8005\u901a\u8fc7\u56fe\u8868\u5b9e\u4f8b\u65b9\u6cd5  ",l.a.createElement("code",null,"addTechnicalIndicatorTemplate"),"\u4e3a\u5355\u4e2a\u56fe\u8868\u5b9e\u4f8b\u6dfb\u52a0\u5373\u53ef\u3002\u6dfb\u52a0\u5230\u56fe\u8868\u5373\u53ef\u548c\u5185\u7f6e\u6280\u672f\u6307\u6807\u4e00\u6837\u53bb\u4f7f\u7528\u3002"),l.a.createElement("h3",{id:"\u5c5e\u6027\u8bf4\u660e"},l.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027\u8bf4\u660e"),l.a.createElement("h4",{id:"\u6280\u672f\u6307\u6807\u4fe1\u606f"},l.a.createElement(r["AnchorLink"],{to:"#\u6280\u672f\u6307\u6807\u4fe1\u606f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6280\u672f\u6307\u6807\u4fe1\u606f"),l.a.createElement(c["a"],{code:"{\n  // \u6280\u672f\u6307\u6807\u540d\u5b57\uff0c\u5fc5\u8981\u5b57\u6bb5\uff0c\u662f\u6280\u672f\u6307\u6807\u7684\u552f\u4e00\u6807\u8bc6\n  name: 'xxx',\n\n  // \u7528\u4e8e\u63d0\u793a\u663e\u793a\n  shortName: 'xxx',\n\n  // \u6280\u672f\u6307\u6807\u8ba1\u7b97\u65b9\u6cd5\uff0c\u5fc5\u8981\u5b57\u6bb5\n  // \u8be5\u5b57\u6bb5\u662f\u4e00\u4e2a\u56de\u8c03\u65b9\u6cd5\uff0c\u56de\u8c03\u53c2\u6570\u662f\u5f53\u524d\u56fe\u8868\u7684\u6e90\u6570\u636e\u548c\u8ba1\u7b97\u7684\u53c2\u6570\uff0c\u9700\u8981\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\u6216\u8005\u4e00\u4e2apromise\n  // kLineDataList \u56fe\u8868\u7684\u539f\u59cb\u6570\u636e\n  // params \u8ba1\u7b97\u53c2\u6570\n  // plots \u6280\u672f\u6307\u6807\u6570\u636e\u914d\u7f6e\u9879\n  calcTechnicalIndicator: (kLineDataList, { params, plots }) => { return [] },\n\n  // \u7cfb\u5217\n  series: 'normal',\n\n  // \u7cbe\u5ea6\uff0c\u53ef\u7f3a\u7701\uff0c\u9ed8\u8ba4\u4e3a4\n  precision: 4,\n\n  // \u8ba1\u7b97\u53c2\u6570\uff0c\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u53ef\u7f3a\u7701\uff0c\u53ef\u4ee5\u662f\u6570\u5b57\u4e5f\u53ef\u4ee5\u662f`{ value, allowDecimal }`\n  calcParams: [],\n\n  // \u6570\u636e\u914d\u7f6e\u9879\uff0c\u662f\u4e00\u4e2a\u6570\u7ec4\n  plots: [],\n\n  // \u662f\u5426\u9700\u8981\u68c0\u67e5\u8ba1\u7b97\u53c2\u6570\uff0c\u53ef\u7f3a\u7701\uff0c\u9ed8\u8ba4\u4e3atrue\n  // \u5982\u679c\u4e3atrue\uff0c\u5f53\u8bbe\u7f6e\u6307\u6807\u53c2\u6570\u65f6\uff0c\u5982\u679c\u53c2\u6570\u4e2a\u6570\u548c\u9ed8\u8ba4\u7684\u53c2\u6570\u4e2a\u6570\u4e0d\u4e00\u81f4\uff0c\u5c06\u4e0d\u80fd\u751f\u6548\n  shouldCheckParamCount: true,\n\n  // \u662f\u5426\u9700\u8981\u683c\u5f0f\u5316\u5927\u6570\u636e\u503c\n  shouldFormatBigNumber: false,\n\n  // \u662f\u5426\u9700\u8981\u8f85\u52a9ohlc\u7ebf\n  shouldOhlc: false,\n\n  // \u6307\u5b9a\u7684\u6700\u5c0f\u503c\uff0c\u53ef\u7f3a\u7701\n  // \u5982\u679c\u8bbe\u7f6e\uff0c\u5728\u8ba1\u7b97y\u8f74\u4e0a\u6700\u5c0f\u503c\u65f6\u5c06\u4ee5\u6b64\u4e3a\u51c6\n  minValue: null,\n\n  // \u6307\u5b9a\u7684\u6700\u5927\u503c\uff0c\u53ef\u7f3a\u7701\n  // \u5982\u679c\u8bbe\u7f6e\uff0c\u5728\u8ba1\u7b97y\u8f74\u4e0a\u6700\u5927\u503c\u65f6\u5c06\u4ee5\u6b64\u4e3a\u51c6\n  maxValue: null,\n\n  // \u6837\u5f0f\uff0c\u53ef\u7f3a\u7701\uff0c\u7f3a\u7701\u5219\u540c\u6b65\u6837\u5f0f\u914d\u7f6e\n  styles: null,\n\n  // \u91cd\u65b0\u751f\u6210plots\uff0c\u662f\u4e00\u4e2a\u56de\u8c03\u65b9\u6cd5\uff0c\u53ef\u7f3a\u7701\n  // \u5f53\u8ba1\u7b97\u53c2\u6570\u53d1\u751f\u6539\u53d8\u65f6\u89e6\u53d1\n  // \u8fd4\u56de\u503c\u9700\u8981\u4e00\u4e2aplots\n  regeneratePlots: (params) => { return [] },\n\n  // \u751f\u6210tooltip\u663e\u793a\u7684\u6570\u636e\uff0c\u8fd4\u56de\u683c\u5f0f`{ title: 'xxx', value: 'xxx', color: 'xxx' }`\u7684\u6570\u7ec4\uff0c\u53ef\u7f3a\u7701\n  // dataSource \u6570\u636e\u6e90\n  // viewport \u5c3a\u5bf8\u4fe1\u606f\n  // crosshair \u5341\u5b57\u5149\u6807\u4fe1\u606f\n  // technicalIndicator \u6280\u672f\u6307\u6807\u4fe1\u606f\n  // xAxis x\u8f74\n  // yAxis y\u8f74\n  // defaultStyles \u9ed8\u8ba4\u6837\u5f0f\n  createTooltipDataSource: ({\n    dataSource,\n    viewport,\n    crosshair,\n    technicalIndicator,\n    xAxis,\n    yAxis,\n    defaultStyles\n  }) => { return [] }\n\n  // \u81ea\u5b9a\u4e49\u6e32\u67d3\uff0c\u53ef\u7f3a\u7701\uff0c\n  // ctx canvas\u4e0a\u4e0b\u6587\n  // dataSource \u6570\u636e\u6e90\uff0c\u5305\u542b\u4e86\u539f\u59cb\u7684k\u7ebf\u6570\u636e\u548c\u8ba1\u7b97\u51fa\u6765\u7684\u6307\u6807\u6570\u636e\u4ee5\u53ca\u8d77\u59cb\u7ed8\u5236\u70b9\u4f4d\u7f6e\n  // viewport \u5c3a\u5bf8\u4fe1\u606f\n  // styles \u6837\u5f0f\n  // xAxis x\u8f74\n  // yAxis y\u8f74\n  render: ({\n    ctx,\n    dataSource,\n    viewport,\n    styles,\n    xAxis,\n    yAxis\n  }) => {}\n}",lang:"javascript"}),l.a.createElement("h4",{id:"plots\u5b50\u9879\u4fe1\u606f"},l.a.createElement(r["AnchorLink"],{to:"#plots\u5b50\u9879\u4fe1\u606f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Plots\u5b50\u9879\u4fe1\u606f"),l.a.createElement(c["a"],{code:"{\n  // \u5fc5\u8981\u5b57\u6bb5\uff0c\u51b3\u5b9a\u65b9\u6cd5calcTechnicalIndicator\u7684\u8fd4\u56de\u503c\n  key: '',\n  // \u53ef\u7f3a\u7701\uff0c\u4e3b\u8981\u7528\u4e8e\u63d0\u793a\n  title: '',\n  // \u53ef\u7f3a\u7701\uff0c\u7ed8\u5236\u7c7b\u578b\uff0c\u76ee\u524d\u652f\u6301'line', 'circle'\u548c'bar'\n  type: '',\n  // \u57fa\u7840\u6bd4\u5bf9\u6570\u636e\uff0c\u53ef\u7f3a\u7701\n  // \u5982\u679c\u8bbe\u7f6e\uff0c\u5f53\u56fe\u5f62\u662fbar\u65f6\uff0c\u5c06\u5728\u6b64\u503c\u4e0a\u4e0b\u7ed8\u5236\uff0c\u5982\uff1aMACD\u6307\u6807\u7684macd\u503c\n  baseValue: null,\n  // \u53ef\u7f3a\u7701\n  // \u53ef\u4ee5\u662f\u4e00\u4e2a\u56fa\u5b9a\u7684\u503c\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5982\u679c\u662f\u65b9\u6cd5\uff0c\u9700\u8981\u8fd4\u56de\u4e00\u4e2a\u989c\u8272\u503c\u7684\u5b57\u7b26\u4e32\n  color: (data, options) => {},\n  // \u53ef\u7f3a\u7701\uff0c\u53ea\u6709\u5f53type\u662f'circle'\u548c'bar'\u624d\u4f1a\u751f\u6548\n  // \u53ef\u4ee5\u662f\u4e00\u4e2a\u56fa\u5b9a\u7684boolean\u503c\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5982\u679c\u662f\u65b9\u6cd5\uff0c\u9700\u8981\u8fd4\u56de\u4e00\u4e2aboolean\u503c\n  isStroke: (data, options) => {}\n}",lang:"javascript"}),l.a.createElement("h3",{id:"\u793a\u4f8b"},l.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement("p",null,"\u4ee5\u4e0b\u5c06\u4ee5\u4e00\u4e2a\u540d\u4e3a'MA'\u6280\u672f\u6307\u6807\uff0c\u4e00\u6b65\u6b65\u7684\u4ecb\u7ecd\u5982\u4f55\u53bb\u505a\u6280\u672f\u6307\u6807\u6a21\u677f\u3002"),l.a.createElement("h4",{id:"\u6b65\u9aa4\u4e00"},l.a.createElement(r["AnchorLink"],{to:"#\u6b65\u9aa4\u4e00","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6b65\u9aa4\u4e00"),l.a.createElement("p",null,"\u9996\u5148\u786e\u5b9a\u8ba1\u7b97\u53c2\u6570(calcParams)\u548c\u914d\u7f6e\u9879(plots)\uff0c'MA'\u6280\u672f\u6307\u6807\u9700\u8981\u5c55\u793a\u4e24\u4e2a\u5468\u671f\u7684\u6536\u76d8\u4ef7\u5e73\u5747\u503c\u8fde\u8d77\u6765\u7684\u7ebf\uff0c\u4e00\u6761\u4e3a'ma1'\uff0c\u4e00\u6761\u540d\u4e3a'ma2'\u3002\u56e0\u6b64plots\u914d\u7f6e\u4e3a\uff1a"),l.a.createElement(c["a"],{code:"{\n  // \u8ba1\u7b97\u53c2\u6570\u662f2\u4e2a\uff0c\u4e00\u4e2a\u8ba1\u7b975\u4e2a\u5468\u671f\u65f6\u95f4\u7684\u5747\u503c\uff0c\u5373'ma1'\uff0c\u53e6\u4e00\u4e2a\u8ba1\u7b9710\u4e2a\u5468\u671f\u65f6\u95f4\u7684\u5747\u503c\uff0c\u5373'ma10'\n  calcParams: [5, 10],\n  plots: [\n    // \u7b2c\u4e00\u6761\u7ebf'ma5'\n    { key: 'ma1', title: 'MA5: ', type: 'line' },\n    // \u7b2c\u4e8c\u6761\u7ebf'ma10'\n    { key: 'ma2', title: 'MA10: ', type: 'line' }\n  ]\n}",lang:"javascript"}),l.a.createElement("h4",{id:"\u6b65\u9aa4\u4e8c"},l.a.createElement(r["AnchorLink"],{to:"#\u6b65\u9aa4\u4e8c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6b65\u9aa4\u4e8c"),l.a.createElement("p",null,"\u786e\u5b9a\u5176\u5b83\u5c5e\u6027"),l.a.createElement(c["a"],{code:"{\n  name: 'MA',\n  shortName: 'MA',\n  calcParams: [5, 10],\n  plots: [\n    { key: 'ma1', title: 'MA5: ', type: 'line' },\n    { key: 'ma2', title: 'MA10: ', type: 'line' }\n  ],\n  // \u5f53\u8ba1\u7b97\u53c2\u6570\u6539\u53d8\u65f6\uff0c\u5e0c\u671b\u63d0\u793a\u7684\u548c\u53c2\u6570\u4e00\u6837\uff0c\u5373title\u7684\u503c\u9700\u8981\u6539\u53d8\n  regeneratePlots: (params) => {\n    return params.map((p, i) => {\n      return { key: `ma${i + 1}`, title: `MA${p}: `, type: 'line' }\n    })\n  },\n  // \u8ba1\u7b97\u7ed3\u679c\n  calcTechnicalIndicator: (kLineDataList, { params, plots }) => {\n    // \u6ce8\u610f\uff1a\u8fd4\u56de\u6570\u636e\u4e2a\u6570\u9700\u8981\u548ckLineDataList\u7684\u6570\u636e\u4e2a\u6570\u4e00\u81f4\uff0c\u5982\u679c\u65e0\u503c\uff0c\u7528{}\u4ee3\u66ff\u5373\u53ef\u3002\n    // \u8ba1\u7b97\u53c2\u6570\u6700\u597d\u53d6\u56de\u8c03\u53c2\u6570params\uff0c\u5982\u679c\u4e0d\u662f\uff0c\u540e\u7eed\u8ba1\u7b97\u53c2\u6570\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\uff0c\u8fd9\u91cc\u8ba1\u7b97\u4e0d\u80fd\u53ca\u65f6\u54cd\u5e94\n    const closeSums = []\n    return kLineDataList.map((kLineData, i) => {\n      const ma = {}\n      const close = kLineData.close\n      params.forEach((param, j) => {\n        closeSums[j] = (closeSums[j] || 0) + close\n        if (i >= param - 1) {\n          ma[plots[j].key] = closeSums[j] / param\n          closeSums[j] -= dataList[i - (param - 1)].close\n        }\n      })\n      // \u5982\u679c\u6709\u503c\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u91cc\u6bcf\u4e00\u9879\u7684\u6570\u636e\u683c\u5f0f\u5e94\u8be5\u662f { ma1: xxx, ma2: xxx }\n      // \u6bcf\u4e2akey\u9700\u8981\u548cplots\u4e2d\u7684\u5b50\u9879key\u5bf9\u5e94\u7684\u503c\u4e00\u81f4\n      return ma\n    })\n  }\n}",lang:"javascript"})))}));n["default"]=e=>{var n=l.a.useContext(r["context"]),t=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:t})}}}]);