(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{439:function(t,s,e){"use strict";e.r(s);var n=e(62),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"_11-understand-a-control-s-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-understand-a-control-s-structure"}},[t._v("#")]),t._v(" 11. Understand a control's structure")]),t._v(" "),e("p",[t._v("Let's take a look at the default control file, "),e("code",[t._v("controls/example.rb")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-ruby line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ruby"}},[e("code",[t._v("title "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sample section'")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# you can also use plain tests")]),t._v("\ndescribe file"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/tmp'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  it "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" should be_directory "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# you add controls here")]),t._v("\ncontrol "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tmp-1.0'")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A unique ID for this control")]),t._v("\n  impact "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),t._v("                                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The criticality, if this control fails.")]),t._v("\n  title "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Create /tmp directory'")])]),t._v("             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A human-readable title")]),t._v("\n  desc "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'An optional description...'")])]),t._v("\n  describe file"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/tmp'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("                  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The actual test")]),t._v("\n    it "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" should be_directory "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Tip for developing profiles")]),t._v(" "),e("p",[t._v("When creating new profiles use the existing example file as a template")])]),t._v(" "),e("p",[t._v("This example shows two tests. Both tests check for the existence of the "),e("code",[t._v("/tmp")]),t._v(" directory. The second test provides additional information about the test. Let's break down each component.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("control")]),t._v(" (line 9) is followed by the control's name. Each control in a profile has a unique name.")]),t._v(" "),e("li",[e("code",[t._v("impact")]),t._v(" (line 10) measures the relative importance of the test and must be a value between 0.0 and 1.0.")]),t._v(" "),e("li",[e("code",[t._v("title")]),t._v(" (line 11) defines the control's purpose.")]),t._v(" "),e("li",[e("code",[t._v("desc")]),t._v(" (line 12) provides a more complete description of what the control checks for.")]),t._v(" "),e("li",[e("code",[t._v("describe")]),t._v(" (lines 13 — 15) defines the test. Here, the test checks for the existence of the "),e("code",[t._v("/tmp")]),t._v(" directory.")])]),t._v(" "),e("p",[t._v("In Ruby, the "),e("code",[t._v("do")]),t._v(" and "),e("code",[t._v("end")]),t._v(" keywords define a "),e("code",[t._v("block")]),t._v(". An InSpec control always contains at least one "),e("code",[t._v("describe")]),t._v(" block. However, a control can contain many "),e("code",[t._v("describe")]),t._v(" blocks.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("More information on a block in Ruby")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://ruby-for-beginners.rubymonstas.org/blocks.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ruby's block syntax"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=a.exports}}]);