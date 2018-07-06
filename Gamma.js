(function(global, $) {

    var Gamma = function(firstName, lastName, language) {
        return new Gamma.init(firstName, lastName, language);
    }

    // Every Unicode Supported Language
    let supportedLangs = ['ab', 'aa', 'af', 'ak', 'sq', 'am', 'ar', 'an', 'hy', 'as', 'av', 'ae', 'ay', 'az', 'bm', 'ba', 'eu', 'be', 'bn', 'bh', 'bi', 'bs', 'br', 'bg', 'my', 'ca', 'ch', 'ce', 'ny', 'zh', 'zh-Hans', 'zh-Hant', 'cv', 'kw', 'co', 'cr', 'hr', 'cs', 'da', 'dv', 'nl', 'dz', 'en', 'eo', 'et', 'ee', 'fo', 'fj', 'fi', 'fr', 'ff', 'gl', 'gd', 'gv', 'ka', 'de', 'el', 'kl', 'gn', 'gu', 'ht', 'ha', 'he', 'hz', 'hi', 'ho', 'hu', 'is', 'io', 'ig', 'id', 'in', 'ia', 'ie', 'iu', 'ik', 'ga', 'it', 'ja', 'jv', 'kl', 'kn', 'kr', 'ks', 'kk', 'km', 'ki', 'rw', 'rn', 'ky', 'kv', 'kg', 'ko', 'ku', 'kj', 'lo', 'la', 'lv', 'li', 'ln', 'lt', 'lu', 'lg', 'lb', 'gv', 'mk', 'mg', 'ms', 'ml', 'mt', 'mi', 'mr', 'mh', 'mo', 'mn', 'na', 'nv', 'ng', 'nd', 'ne', 'no', 'nb', 'nn', 'ii', 'oc', 'oj', 'cu', 'or', 'om', 'os', 'pi', 'ps', 'fa', 'pl', 'pt', 'pa', 'qu', 'rm', 'ro', 'ru', 'se', 'sm', 'sg', 'sa', 'sr', 'sh', 'st', 'tn', 'sn', 'ii', 'sd', 'si', 'ss', 'sk', 'sl', 'so', 'nr', 'es', 'su', 'sw', 'ss', 'sv', 'tl', 'ty', 'tg', 'ta', 'tt', 'te', 'th', 'bo', 'ti', 'to', 'ts', 'tr', 'tk', 'tw', 'ug', 'uk', 'ur', 'uz', 've', 'vi', 'vo', 'wa', 'cy', 'wo', 'fy', 'xh', 'ji', 'yo', 'za', 'zu'];

    let greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    let formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    let logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    Gamma.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg= this.greeting();
            };
            if (console) {
                console.log(msg);
            }
            //makes this method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this;
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        },

         getAbsoluteUrl: function() {
            var a;
            return function(url) {
                if(!a) a = document.createElement('a');
                a.href = url;
                return a.href;
            };
        },

        sheet: function() {
            // Create the <style> tag
            var style = document.createElement('style');
            // WebKit hack :(
            style.appendChild(document.createTextNode(''));
            // Add the <style> element to the page
            document.head.appendChild(style);
            return style.sheet;
        },

        BMI(form,meters,kilograms) {
            Square=meters*meters
            form.calcval.value=kilograms/Square
        } ,

        bmiChart(div) {
            div.innerHTML = `<table border=1 bgcolor=#FFFFFF><tr><td align=left rowspan=2><p align=center><big><big><big>BMI</big></big></big><td align=right colspan=19><font face=""><b></b></font><p align=left><font face=""><b> </b><strong>Height</strong> (in) <b> </b></font><tr valign=bottom><td><b>58</b><td><b>59</b><td><b>60</b><td><b>61</b><td><b>62</b><td><b>63</b><td><b>64</b><td><b>65</b><td><b>66</b><td><b>67</b><td><b>68</b><td><b>69</b><td><b>70</b><td><b>71</b><td><b>72</b><td><b>73</b><td><b>74</b><td><b>75</b><td><b>76</b><tr valign=bottom><td align=right><font face=""><b></b></font><p align=left><font face=""><b> </b><strong>Weight</strong></font> (lbs)<td>4'<small><small>10</small></small>"<td>4'<small><small>11</small></small>"<td>5'<small><small>0</small></small>"<td>5'<small><small>1</small></small>"<td>5'<small><small>2</small></small>"<td>5'<small><small>3</small></small>"<td>5'<small><small>4</small></small>"<td>5'<small><small>5</small></small>"<td>5'<small><small>6</small></small>"<td>5'<small><small>7</small></small>"<td>5'<small><small>8</small></small>"<td>5'<small><small>9</small></small>"<td>5'<small><small>10</small></small>"<td>5'<small><small>11</small></small>"<td>6'<small><small>0</small></small>"<td>6'<small><small>1</small></small>"<td>6'<small><small>2</small></small>"<td>6'<small><small>3</small></small>"<td>6'<small><small>4</small></small>"<tr valign=bottom><td align=right><b>100</b><td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<td bgcolor=#FF3333>17<td bgcolor=#FF3333>16<td bgcolor=#FF3333>16<td bgcolor=#FF3333>15<td bgcolor=#FF3333>15<td bgcolor=#FF3333>14<td bgcolor=#FF3333>14<td bgcolor=#FF3333>14<td bgcolor=#FF3333>13<td bgcolor=#FF3333>13<td bgcolor=#FF3333>13<td bgcolor=#FF3333>12<tr valign=bottom><td align=right><b>105</b><td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<td bgcolor=#FF3333>16<td bgcolor=#FF3333>16<td bgcolor=#FF3333>16<td bgcolor=#FF3333>15<td bgcolor=#FF3333>15<td bgcolor=#FF3333>14<td bgcolor=#FF3333>14<td bgcolor=#FF3333>14<td bgcolor=#FF3333>13<td bgcolor=#FF3333>13<tr valign=bottom><td align=right><b>110</b><td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<td bgcolor=#FF3333>17<td bgcolor=#FF3333>16<td bgcolor=#FF3333>16<td bgcolor=#FF3333>15<td bgcolor=#FF3333>15<td bgcolor=#FF3333>15<td bgcolor=#FF3333>14<td bgcolor=#FF3333>14<td bgcolor=#FF3333>13<tr valign=bottom><td align=right><b>115</b><td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<td bgcolor=#FF3333>17<td bgcolor=#FF3333>16<td bgcolor=#FF3333>16<td bgcolor=#FF3333>15<td bgcolor=#FF3333>15<td bgcolor=#FF3333>14<td bgcolor=#FF3333>14<tr valign=bottom><td align=right><b>120</b><td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<td bgcolor=#FF3333>17<td bgcolor=#FF3333>16<td bgcolor=#FF3333>16<td bgcolor=#FF3333>15<td bgcolor=#FF3333>15<td bgcolor=#FF3333>15<tr valign=bottom><td align=right><b>125</b><td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<td bgcolor=#FF3333>17<td bgcolor=#FF3333>17<td bgcolor=#FF3333>16<td bgcolor=#FF3333>16<td bgcolor=#FF3333>15<tr valign=bottom><td align=right><b>130</b><td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<td bgcolor=#FF3333>17<td bgcolor=#FF3333>16<td bgcolor=#FF3333>16<tr valign=bottom><td align=right><b>135</b><td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<td bgcolor=#FF3333>17<td bgcolor=#FF3333>16<tr valign=bottom><td align=right><b>140</b><td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<td bgcolor=#FF3333>17<tr valign=bottom><td align=right><b>145</b><td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<td bgcolor=#FF3333>18<tr valign=bottom><td align=right><b>150</b><td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<td bgcolor=#FF3333>18<tr valign=bottom><td align=right><b>155</b><td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<td bgcolor=#FF3333>19<td bgcolor=#FF3333>19<tr valign=bottom><td align=right><b>160</b><td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<td bgcolor=#33FF00>20<tr valign=bottom><td align=right><b>165</b><td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>21<td bgcolor=#33FF00>20<tr valign=bottom><td align=right><b>170</b><td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<td bgcolor=#33FF00>21<tr valign=bottom><td align=right><b>175</b><td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<td bgcolor=#33FF00>21<tr valign=bottom><td align=right><b>180</b><td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>23<td bgcolor=#33FF00>22<tr valign=bottom><td align=right><b>185</b><td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<td bgcolor=#33FF00>23<tr valign=bottom><td align=right><b>190</b><td bgcolor=#FF0099>40<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<td bgcolor=#33FF00>23<tr valign=bottom><td align=right><b>195</b><td bgcolor=#FF0099>41<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<td bgcolor=#33FF00>24<tr valign=bottom><td align=right><b>200</b><td bgcolor=#FF0099>42<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<td bgcolor=#33FF00>24<tr valign=bottom><td align=right><b>205</b><td bgcolor=#FF0099>43<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>25<tr valign=bottom><td align=right><b>210</b><td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<td bgcolor=#FFFF99>26<tr valign=bottom><td align=right><b>215</b><td bgcolor=#FF0099>45<td bgcolor=#FF0099>44<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<td bgcolor=#FFFF99>26<tr valign=bottom><td align=right><b>220</b><td bgcolor=#FF0099>46<td bgcolor=#FF0099>45<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<tr valign=bottom><td align=right><b>225</b><td bgcolor=#FF0099>47<td bgcolor=#FF0099>46<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<td bgcolor=#FFFF99>27<tr valign=bottom><td align=right><b>230</b><td bgcolor=#FF0099>48<td bgcolor=#FF0099>47<td bgcolor=#FF0099>45<td bgcolor=#FF0099>44<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>28<tr valign=bottom><td align=right><b>235</b><td bgcolor=#FF0099>49<td bgcolor=#FF0099>48<td bgcolor=#FF0099>46<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<td bgcolor=#FFFF99>29<tr valign=bottom><td align=right><b>240</b><td bgcolor=#FF0099>50<td bgcolor=#FF0099>49<td bgcolor=#FF0099>47<td bgcolor=#FF0099>45<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<td bgcolor=#FFFF99>29<tr valign=bottom><td align=right><b>245</b><td bgcolor=#FF0099>51<td bgcolor=#FF0099>50<td bgcolor=#FF0099>48<td bgcolor=#FF0099>46<td bgcolor=#FF0099>45<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<tr valign=bottom><td align=right><b>250</b><td bgcolor=#FF0099>52<td bgcolor=#FF0099>51<td bgcolor=#FF0099>49<td bgcolor=#FF0099>47<td bgcolor=#FF0099>46<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<td bgcolor=#FFCC99>30<tr valign=bottom><td align=right><b>255</b><td bgcolor=#FF0099>53<td bgcolor=#FF0099>52<td bgcolor=#FF0099>50<td bgcolor=#FF0099>48<td bgcolor=#FF0099>47<td bgcolor=#FF0099>45<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<td bgcolor=#FFCC99>31<tr valign=bottom><td align=right><b>260</b><td bgcolor=#FF0099>54<td bgcolor=#FF0099>53<td bgcolor=#FF0099>51<td bgcolor=#FF0099>49<td bgcolor=#FF0099>48<td bgcolor=#FF0099>46<td bgcolor=#FF0099>45<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<tr valign=bottom><td align=right><b>265</b><td bgcolor=#FF0099>56<td bgcolor=#FF0099>54<td bgcolor=#FF0099>52<td bgcolor=#FF0099>50<td bgcolor=#FF0099>49<td bgcolor=#FF0099>47<td bgcolor=#FF0099>46<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<td bgcolor=#FFCC99>32<tr valign=bottom><td align=right><b>270</b><td bgcolor=#FF0099>57<td bgcolor=#FF0099>55<td bgcolor=#FF0099>53<td bgcolor=#FF0099>51<td bgcolor=#FF0099>49<td bgcolor=#FF0099>48<td bgcolor=#FF0099>46<td bgcolor=#FF0099>45<td bgcolor=#FF0099>44<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>33<tr valign=bottom><td align=right><b>275</b><td bgcolor=#FF0099>58<td bgcolor=#FF0099>56<td bgcolor=#FF0099>54<td bgcolor=#FF0099>52<td bgcolor=#FF0099>50<td bgcolor=#FF0099>49<td bgcolor=#FF0099>47<td bgcolor=#FF0099>46<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<td bgcolor=#FFCC99>34<tr valign=bottom><td align=right><b>280</b><td bgcolor=#FF0099>59<td bgcolor=#FF0099>57<td bgcolor=#FF0099>55<td bgcolor=#FF0099>53<td bgcolor=#FF0099>51<td bgcolor=#FF0099>50<td bgcolor=#FF0099>48<td bgcolor=#FF0099>47<td bgcolor=#FF0099>45<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<td bgcolor=#FFCC99>34<tr valign=bottom><td align=right><b>285</b><td bgcolor=#FF0099>60<td bgcolor=#FF0099>58<td bgcolor=#FF0099>56<td bgcolor=#FF0099>54<td bgcolor=#FF0099>52<td bgcolor=#FF0099>51<td bgcolor=#FF0099>49<td bgcolor=#FF0099>48<td bgcolor=#FF0099>46<td bgcolor=#FF0099>45<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<tr valign=bottom><td align=right><b>290</b><td bgcolor=#FF0099>61<td bgcolor=#FF0099>59<td bgcolor=#FF0099>57<td bgcolor=#FF0099>55<td bgcolor=#FF0099>53<td bgcolor=#FF0099>51<td bgcolor=#FF0099>50<td bgcolor=#FF0099>48<td bgcolor=#FF0099>47<td bgcolor=#FF0099>46<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<td bgcolor=#FFCC99>35<tr valign=bottom><td align=right><b>295</b><td bgcolor=#FF0099>62<td bgcolor=#FF0099>60<td bgcolor=#FF0099>58<td bgcolor=#FF0099>56<td bgcolor=#FF0099>54<td bgcolor=#FF0099>52<td bgcolor=#FF0099>51<td bgcolor=#FF0099>49<td bgcolor=#FF0099>48<td bgcolor=#FF0099>46<td bgcolor=#FF0099>45<td bgcolor=#FF0099>44<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<td bgcolor=#FFCC99>36<tr valign=bottom><td align=right><b>300</b><td bgcolor=#FF0099>63<td bgcolor=#FF0099>61<td bgcolor=#FF0099>59<td bgcolor=#FF0099>57<td bgcolor=#FF0099>55<td bgcolor=#FF0099>53<td bgcolor=#FF0099>52<td bgcolor=#FF0099>50<td bgcolor=#FF0099>49<td bgcolor=#FF0099>47<td bgcolor=#FF0099>46<td bgcolor=#FF0099>44<td bgcolor=#FF0099>43<td bgcolor=#FF0099>42<td bgcolor=#FF0099>41<td bgcolor=#FF0099>40<td bgcolor=#FFCC99>39<td bgcolor=#FFCC99>38<td bgcolor=#FFCC99>37<tr><td align=center colspan=20></table><p><table border=1 cellpadding=0 cellspacing=0><tr><td bgcolor=#FF3333 align=center><font face="">   Under-weight   </font><tr><td bgcolor=#33FF00 align=center><font face="">   Healthy-weight   </font><tr><td bgcolor=#FFFF99 align=center><font face="">   Hefty   </font><tr><td bgcolor=#FFCC99 align=center><font face="">   Prosperous   </font><tr><td bgcolor=#FF0099 align=center><font face="">   Grossly Prosperous   </font></table>`;
        },

        // On the fly Temperature change
        toCelsius(f, k) {
            return  [(f-32) * (5/9), (k - 273.15)];
        },

        toFahrenheit(c, k) {
            return [(c*9/5+32), ((k - 273.15) * 9/5 + 32)];
        },

        toKelvin(c, f) {
            return [(c + 273.15), ((f-32) * (5/9) + 273.15)];
        },

        // Allows enter button on keyboard to submit new task
        enterKey(){
            // To make this work you need to add the input class to your input
            // And add the button class to your button 
            document.querySelector(".input").addEventListener("keyup", function(event) {
                event.preventDefault();
                if (event.keyCode == 13) {
                    document.querySelector(".button").click();
                }
            });
        }
    };

    Gamma.init = function(firstName, lastName, language, age, gender, weight) {
        var self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";
        self.age = age || "";
        self.gender = gender || "";
        self.weight = weight || "";
    }

    Gamma.init.prototype = Gamma.prototype;

    global.Gamma = global.Rx = global.rx = Gamma;

}(window, $));