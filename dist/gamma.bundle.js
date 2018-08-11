!function(F){var o={};function t(l){if(o[l])return o[l].exports;var r=o[l]={i:l,l:!1,exports:{}};return F[l].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=F,t.c=o,t.d=function(F,o,l){t.o(F,o)||Object.defineProperty(F,o,{enumerable:!0,get:l})},t.r=function(F){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(F,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(F,"__esModule",{value:!0})},t.t=function(F,o){if(1&o&&(F=t(F)),8&o)return F;if(4&o&&"object"==typeof F&&F&&F.__esModule)return F;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:F}),2&o&&"string"!=typeof F)for(var r in F)t.d(l,r,function(o){return F[o]}.bind(null,r));return l},t.n=function(F){var o=F&&F.__esModule?function(){return F.default}:function(){return F};return t.d(o,"a",o),o},t.o=function(F,o){return Object.prototype.hasOwnProperty.call(F,o)},t.p="",t(t.s=0)}([function(F,o,t){!function(F,o){var l=function(){return new l.init};let r=["en","es"],b=t(1);t(2);l.prototype={validate(){if(-1===r.indexOf(this.language))throw"Invalid language"},getUserIP(F){var o=new(window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection)({iceServers:[]}),t=function(){},l={},r=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;function b(o){l[o]||F(o),l[o]=!0}return o.createDataChannel(""),o.createOffer().then(function(F){F.sdp.split("\n").forEach(function(F){F.indexOf("candidate")<0||F.match(r).forEach(b)}),o.setLocalDescription(F,t,t)}).catch(function(F){}),o.onicecandidate=function(F){F&&F.candidate&&F.candidate.candidate&&F.candidate.candidate.match(r)&&F.candidate.candidate.match(r).forEach(b)},this},setLang(F){return this.language=F,this.validate(),this},getAbsoluteUrl:function(){var F;return function(o){return F||(F=document.createElement("a")),F.href=o,F.href}}(),sheet(){var F=document.createElement("style");return F.appendChild(document.createTextNode("")),document.head.appendChild(F),F.sheet},getBMI(F,o,t,l){"inches"==t&&(F/=39.3700787),"lb"==l&&(o/=2.20462);var r=o/Math.pow(F,2);return(r=Math.round(100*r)/100)<18.5?r+"<br>Underweight":r>=18.5&&r<=25?r+"<br>Normal":r>=25&&r<=30?r+"<br>Obese":r>30?r+"<br>Overweight":void 0},bmiChart:F=>F.innerHTML=b,toCelsius:(F,o)=>[5/9*(F-32),o-273.15],toFahrenheit:(F,o)=>[9*F/5+32,9*(o-273.15)/5+32],toKelvin:(F,o)=>[F+273.15,5/9*(o-32)+273.15],log(F,o){console.log(F),console.log(o),console.log(F)},keyLogger(){document.addEventListener("keydown",function(F){const o=F.key;console.log(o)})},enterKey(F,o){document.querySelector(F).addEventListener("keyup",function(F){F.preventDefault(),13==F.keyCode&&document.querySelector(o).click()})}},l.init=function(){},l.init.prototype=l.prototype,F.Gamma=F.Rx=F.rx=l}(window,$)},function(F,o){F.exports='<table border=1 bgcolor=#FFFFFF><tr><td align=left rowspan=2><p align=center><big><big><big>BMI</big></big></big><td align=right colspan=19><font face=""><b></b></font><p align=left><font face=""><b> </b><strong>Height</strong> (in) <b> </b></font><tr valign=bottom><td><b>58</b><td><b>59</b><td><b>60</b><td><b>61</b><td><b>62</b><td><b>63</b><td><b>64</b><td><b>65</b><td><b>66</b><td><b>67</b><td><b>68</b><td><b>69</b><td><b>70</b><td><b>71</b><td><b>72</b><td><b>73</b><td><b>74</b><td><b>75</b><td><b>76</b><tr valign=bottom><td align=right><font face=""><b></b></font><p align=left><font face=""><b> </b><strong>Weight</strong></font> (lbs)<td>4\'<small><small>10</small></small>"<td>4\'<small><small>11</small></small>"<td>5\'<small><small>0</small></small>"<td>5\'<small><small>1</small></small>"<td>5\'<small><small>2</small></small>"<td>5\'<small><small>3</small></small>"<td>5\'<small><small>4</small></small>"<td>5\'<small><small>5</small></small>"<td>5\'<small><small>6</small></small>"<td>5\'<small><small>7</small></small>"<td>5\'<small><small>8</small></small>"<td>5\'<small><small>9</small></small>"<td>5\'<small><small>10</small></small>"<td>5\'<small><small>11</small></small>"<td>6\'<small><small>0</small></small>"<td>6\'<small><small>1</small></small>"<td>6\'<small><small>2</small></small>"<td>6\'<small><small>3</small></small>"<td>6\'<small><small>4</small></small>"<tr valign=bottom><td align=right><b>100</b><td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<td bgcolor=#FF3333>17<td bgcolor=#FF3333>16<td bgcolor=#FF3333>16<td bgcolor=#FF3333>15<td bgcolor=#FF3333>15<td bgcolor=#FF3333>14<td bgcolor=#FF3333>14<td bgcolor=#FF3333>14<td bgcolor=#FF3333>13<td bgcolor=#FF3333>13<td bgcolor=#FF3333>13<td bgcolor=#FF3333>12<tr valign=bottom><td align=right><b>105</b><td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<td bgcolor=#FF3333>16<td bgcolor=#FF3333>16<td bgcolor=#FF3333>16<td bgcolor=#FF3333>15<td bgcolor=#FF3333>15<td bgcolor=#FF3333>14<td bgcolor=#FF3333>14<td bgcolor=#FF3333>14<td bgcolor=#FF3333>13<td bgcolor=#FF3333>13<tr valign=bottom><td align=right><b>110</b><td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<td bgcolor=#FF3333>17<td bgcolor=#FF3333>16<td bgcolor=#FF3333>16<td bgcolor=#FF3333>15<td bgcolor=#FF3333>15<td bgcolor=#FF3333>15<td bgcolor=#FF3333>14<td bgcolor=#FF3333>14<td bgcolor=#FF3333>13<tr valign=bottom><td align=right><b>115</b><td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<td bgcolor=#FF3333>17<td bgcolor=#FF3333>16<td bgcolor=#FF3333>16<td bgcolor=#FF3333>15<td bgcolor=#FF3333>15<td bgcolor=#FF3333>14<td bgcolor=#FF3333>14<tr valign=bottom><td align=right><b>120</b><td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<td bgcolor=#FF3333>17<td bgcolor=#FF3333>16<td bgcolor=#FF3333>16<td bgcolor=#FF3333>15<td bgcolor=#FF3333>15<td bgcolor=#FF3333>15<tr valign=bottom><td align=right><b>125</b><td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<td bgcolor=#FF3333>17<td bgcolor=#FF3333>17<td bgcolor=#FF3333>16<td bgcolor=#FF3333>16<td bgcolor=#FF3333>15<tr valign=bottom><td align=right><b>130</b><td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<td bgcolor=#FF3333>17<td bgcolor=#FF3333>16<td bgcolor=#FF3333>16<tr valign=bottom><td align=right><b>135</b><td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<td bgcolor=#FF3333>17<td bgcolor=#FF3333>16<tr valign=bottom><td align=right><b>140</b><td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<tr valign=bottom><td align=right><b>145</b><td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<tr valign=bottom><td align=right><b>150</b><td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<tr valign=bottom><td align=right><b>155</b><td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<tr valign=bottom><td align=right><b>160</b><td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<tr valign=bottom><td align=right><b>165</b><td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<tr valign=bottom><td align=right><b>170</b><td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>21<tr valign=bottom><td align=right><b>175</b><td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<tr valign=bottom><td align=right><b>180</b><td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<tr valign=bottom><td align=right><b>185</b><td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>23<tr valign=bottom><td align=right><b>190</b><td bgcolor=#FF0099>40<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<tr valign=bottom><td align=right><b>195</b><td bgcolor=#FF0099>41<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<tr valign=bottom><td align=right><b>200</b><td bgcolor=#FF0099>42<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<tr valign=bottom><td align=right><b>205</b><td bgcolor=#FF0099>43<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<tr valign=bottom><td align=right><b>210</b><td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>26<tr valign=bottom><td align=right><b>215</b><td bgcolor=#FF0099>45<td bgcolor=#FF0099>44<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<tr valign=bottom><td align=right><b>220</b><td bgcolor=#FF0099>46<td bgcolor=#FF0099>45<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<tr valign=bottom><td align=right><b>225</b><td bgcolor=#FF0099>47<td bgcolor=#FF0099>46<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<tr valign=bottom><td align=right><b>230</b><td bgcolor=#FF0099>48<td bgcolor=#FF0099>47<td bgcolor=#FF0099>45<td bgcolor=#FF0099>44<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<tr valign=bottom><td align=right><b>235</b><td bgcolor=#FF0099>49<td bgcolor=#FF0099>48<td bgcolor=#FF0099>46<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>29<tr valign=bottom><td align=right><b>240</b><td bgcolor=#FF0099>50<td bgcolor=#FF0099>49<td bgcolor=#FF0099>47<td bgcolor=#FF0099>45<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<tr valign=bottom><td align=right><b>245</b><td bgcolor=#FF0099>51<td bgcolor=#FF0099>50<td bgcolor=#FF0099>48<td bgcolor=#FF0099>46<td bgcolor=#FF0099>45<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<tr valign=bottom><td align=right><b>250</b><td bgcolor=#FF0099>52<td bgcolor=#FF0099>51<td bgcolor=#FF0099>49<td bgcolor=#FF0099>47<td bgcolor=#FF0099>46<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<tr valign=bottom><td align=right><b>255</b><td bgcolor=#FF0099>53<td bgcolor=#FF0099>52<td bgcolor=#FF0099>50<td bgcolor=#FF0099>48<td bgcolor=#FF0099>47<td bgcolor=#FF0099>45<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<tr valign=bottom><td align=right><b>260</b><td bgcolor=#FF0099>54<td bgcolor=#FF0099>53<td bgcolor=#FF0099>51<td bgcolor=#FF0099>49<td bgcolor=#FF0099>48<td bgcolor=#FF0099>46<td bgcolor=#FF0099>45<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<tr valign=bottom><td align=right><b>265</b><td bgcolor=#FF0099>56<td bgcolor=#FF0099>54<td bgcolor=#FF0099>52<td bgcolor=#FF0099>50<td bgcolor=#FF0099>49<td bgcolor=#FF0099>47<td bgcolor=#FF0099>46<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<tr valign=bottom><td align=right><b>270</b><td bgcolor=#FF0099>57<td bgcolor=#FF0099>55<td bgcolor=#FF0099>53<td bgcolor=#FF0099>51<td bgcolor=#FF0099>49<td bgcolor=#FF0099>48<td bgcolor=#FF0099>46<td bgcolor=#FF0099>45<td bgcolor=#FF0099>44<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<tr valign=bottom><td align=right><b>275</b><td bgcolor=#FF0099>58<td bgcolor=#FF0099>56<td bgcolor=#FF0099>54<td bgcolor=#FF0099>52<td bgcolor=#FF0099>50<td bgcolor=#FF0099>49<td bgcolor=#FF0099>47<td bgcolor=#FF0099>46<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>34<tr valign=bottom><td align=right><b>280</b><td bgcolor=#FF0099>59<td bgcolor=#FF0099>57<td bgcolor=#FF0099>55<td bgcolor=#FF0099>53<td bgcolor=#FF0099>51<td bgcolor=#FF0099>50<td bgcolor=#FF0099>48<td bgcolor=#FF0099>47<td bgcolor=#FF0099>45<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<tr valign=bottom><td align=right><b>285</b><td bgcolor=#FF0099>60<td bgcolor=#FF0099>58<td bgcolor=#FF0099>56<td bgcolor=#FF0099>54<td bgcolor=#FF0099>52<td bgcolor=#FF0099>51<td bgcolor=#FF0099>49<td bgcolor=#FF0099>48<td bgcolor=#FF0099>46<td bgcolor=#FF0099>45<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<tr valign=bottom><td align=right><b>290</b><td bgcolor=#FF0099>61<td bgcolor=#FF0099>59<td bgcolor=#FF0099>57<td bgcolor=#FF0099>55<td bgcolor=#FF0099>53<td bgcolor=#FF0099>51<td bgcolor=#FF0099>50<td bgcolor=#FF0099>48<td bgcolor=#FF0099>47<td bgcolor=#FF0099>46<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<tr valign=bottom><td align=right><b>295</b><td bgcolor=#FF0099>62<td bgcolor=#FF0099>60<td bgcolor=#FF0099>58<td bgcolor=#FF0099>56<td bgcolor=#FF0099>54<td bgcolor=#FF0099>52<td bgcolor=#FF0099>51<td bgcolor=#FF0099>49<td bgcolor=#FF0099>48<td bgcolor=#FF0099>46<td bgcolor=#FF0099>45<td bgcolor=#FF0099>44<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<tr valign=bottom><td align=right><b>300</b><td bgcolor=#FF0099>63<td bgcolor=#FF0099>61<td bgcolor=#FF0099>59<td bgcolor=#FF0099>57<td bgcolor=#FF0099>55<td bgcolor=#FF0099>53<td bgcolor=#FF0099>52<td bgcolor=#FF0099>50<td bgcolor=#FF0099>49<td bgcolor=#FF0099>47<td bgcolor=#FF0099>46<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<tr><td align=center colspan=20></table><p><table border=1 cellpadding=0 cellspacing=0><tr><td bgcolor=#FF3333 align=center><font face="">   Under-weight   </font><tr><td bgcolor=#33FF00 align=center><font face="">   Healthy-weight   </font><tr><td bgcolor=#FFFF99 align=center><font face="">   Hefty   </font><tr><td bgcolor=#FFCC99 align=center><font face="">   Prosperous   </font><tr><td bgcolor=#FF0099 align=center><font face="">   Grossly Prosperous   </font></table>'},function(F,o){F.exports=function(){}}]);