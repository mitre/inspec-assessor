(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{454:function(e,t,a){"use strict";a.r(t);var s=a(62),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"install-inspec-on-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-inspec-on-windows"}},[e._v("#")]),e._v(" Install InSpec on Windows")]),e._v(" "),a("h2",{attrs:{id:"install-ruby"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-ruby"}},[e._v("#")]),e._v(" Install Ruby")]),e._v(" "),a("p",[e._v("Go to "),a("a",{attrs:{href:"https://rubyinstaller.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://rubyinstaller.org/downloads/"),a("OutboundLink")],1),e._v(" and download and install the newest ruby that corresponds with your operating system, it will look like this: "),a("code",[e._v("Ruby+Devkit x.x.x")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Make sure when installing")]),e._v(" that the two checkboxes are checked for "),a("code",[e._v("Add Ruby executables to your PATH")]),e._v(" and "),a("code",[e._v("Associate .rb and .rbw files with this Ruby installation")])]),e._v(" "),a("li",[e._v("When installation is complete keep the last checkbox marked to perform ridk installation. Once console pops up and prompts you to interact then press "),a("code",[e._v("enter")]),e._v(". When this is complete close the command prompt")])]),e._v(" "),a("h4",{attrs:{id:"verify-ruby-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-ruby-installation"}},[e._v("#")]),e._v(" Verify Ruby installation")]),e._v(" "),a("ul",[a("li",[e._v("Open powershell")]),e._v(" "),a("li",[e._v("type "),a("code",[e._v("$ ruby -v")]),e._v(", then press enter\n"),a("ul",[a("li",[e._v("if a ruby version is returned then ruby is properly installed")])])])]),e._v(" "),a("h4",{attrs:{id:"verify-ruby-devkit-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-ruby-devkit-installation"}},[e._v("#")]),e._v(" Verify Ruby Devkit installation")]),e._v(" "),a("ul",[a("li",[e._v("Open powershell")]),e._v(" "),a("li",[e._v("type "),a("code",[e._v("$ gem install json --platform=ruby")]),e._v(", then press enter\n"),a("ul",[a("li",[e._v("If the devkit is installed properly then this command will install the RubyGems library JSON gem.")])])])]),e._v(" "),a("h2",{attrs:{id:"install-inspec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-inspec"}},[e._v("#")]),e._v(" Install InSpec")]),e._v(" "),a("h3",{attrs:{id:"option-1-download-as-a-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-1-download-as-a-package"}},[e._v("#")]),e._v(" Option 1 (Download as a package)")]),e._v(" "),a("p",[e._v("The InSpec package is available for MacOS, RedHat, Ubuntu and Windows. Download the latest package at "),a("a",{attrs:{href:"https://downloads.chef.io/inspec",target:"_blank",rel:"noopener noreferrer"}},[e._v("InSpec Downloads"),a("OutboundLink")],1),e._v(" or install InSpec via script:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Windows\n. { iwr -useb https://omnitruck.chef.io/install.ps1 } | iex; install -project inspec\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h3",{attrs:{id:"option-2-download-as-a-ruby-gem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-2-download-as-a-ruby-gem"}},[e._v("#")]),e._v(" Option 2 (Download as a ruby gem)")]),e._v(" "),a("ul",[a("li",[e._v("Open powershell")]),e._v(" "),a("li",[e._v("type "),a("code",[e._v("$ gem install inspec")]),e._v(", then press enter")])]),e._v(" "),a("h2",{attrs:{id:"download-additional-required-gems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-additional-required-gems"}},[e._v("#")]),e._v(" Download additional required gems")]),e._v(" "),a("ul",[a("li",[e._v("type "),a("code",[e._v("$ gem install bundler")]),e._v(", then press enter")]),e._v(" "),a("li",[e._v("type "),a("code",[e._v("$ gem install test-kitchen")]),e._v(", then press enter")])]),e._v(" "),a("h2",{attrs:{id:"after-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#after-install"}},[e._v("#")]),e._v(" After Install")]),e._v(" "),a("p",[e._v("Once InSpec is installed, run "),a("code",[e._v("$ inspec version")]),e._v(" to verify that the installation was successful.")])])}),[],!1,null,null,null);t.default=n.exports}}]);