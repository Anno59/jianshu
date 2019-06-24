import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.test{
    background-color:#000
}

@font-face {
  font-family: "iconfont";
  src: url('/static/iconfont/iconfont.eot?t=1558014612868'); /* IE9 */
  src: url('/static/iconfont/iconfont.eot?t=1558014612868#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPYAAsAAAAACCQAAAOJAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqDSIMsATYCJAMUCwwABCAFhG0HQRsxBxHVmyfJvjgwzy86rFyn5943lkpG+ki6z8EDn2e9j3QzycBaGE2X8sk3yyc1ABIgYHBxzgMbFaFG7ndnj76Q8ijLKf7/ONxzc4HNZ1kua9OaNid3WQHGnXeBrbHOA+l/oC/KfzmceRUeXfMhAIt4uUSNWg1aYKIhzQQg+vbq0QkzpUPXpAtMBK6SvhqxEANTzpKXgAX+74uPFMsEiaEgCzXpXrMrVd7EvmuqJnon0lZNYuJ4FkAcBArIBRrE4FJbX1QYyKWw9L/TVAEsTCTyTeybUm+uvmvqxZDvSGvRf3ig0EgECBck1ReAKjio4U2szYOCN6XEZZqrwIOEd02l9zKXAYAF2MA04AaEHOs6EolCBwWF+1pamWaYPaLF4dvcutVCtHCLu3c9k+44TjJu4u2mniN3lAoMscK33hV37jhFlW7fds+5Wz4Md/POqrBGCO+5dWuMs2F2Zgu3Z+Okke4RzsguToDl+Law+titWi+Pt1ZEtux00J4DlrCOWbOviEkezyR/owruXeuYuN6ec1KIP4datXpcMKSqnLFr1wxZZQL5qsph/fevPtym+to/k1O53lbtWZ6WePBaklNU9l+8uL8cIF2lFAQw3gBZ6CTFH0o8d+7Q/nMN6dpNNBQNkNBhiG7dFA1hbCod26D+jKozOrQ/erRDh5FVS3XOOHrERyU+I7t6p2IjDx/mWPfa1zNrXO/m75XHO70rNXbLap17Vbqr/1QaMvR0mQJhVM0fkOX08mtn169S7lV7z9CLUWF/otO+p8VTBmGqTvK5t+lEjZoEXnVM/eTlMIf77O0QUOG3aWsA7qs5S/2M9uI/pUGX/NJSGi9akhG9oTWpjfdK+gQxKDSBQ8Lfy/iRrmBPxnGEIbYITEkCIClCHChMUhEakwsGNiXAhUllsMhRe7BNiMEohPYBsk1DIAi0FST+HAVFoMsIjXkMBuE+g4vAFFg4ImRMm/R0vzkSCkYN8g9etY1hRt4E6Te07yQoKfOZL6TBu6HMimz4ig3SGB2Gj62YDRhqa7igxTClFjpqAyrOHHO3y3NTdqNMtfVoQ3VCwahB/sGrtjFuYd7kfv6G9p0E1WTV+V9Igy8fyqxogbiqm1ZZ13LI8LEVswFDbQ0XZMFEAy105bUCKs5cD1+3y3E+01adza+tn3ERYEG2NoQUSmhhCBd6SOebufBVuZ122Ez2YjQCAAAA') format('woff2'),
  url('/static/iconfont/iconfont.woff?t=1558014612868') format('woff'),
  url('/static/iconfont/iconfont.ttf?t=1558014612868') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('/static/iconfont/iconfont.svg?t=1558014612868#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;