(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{441:function(e,t,a){"use strict";a.r(t);var s=a(62),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_13-example-running-an-inspec-profile-using-a-local-archive-for-air-gapped-target-systems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-example-running-an-inspec-profile-using-a-local-archive-for-air-gapped-target-systems"}},[e._v("#")]),e._v(" 13. Example running an InSpec profile using a local archive (for air-gapped target systems)")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("For more information on how to install InSpec on an airgapped system use the "),a("a",{attrs:{href:"https://docs.chef.io/install_chef_air_gap/",target:"_blank",rel:"noopener noreferrer"}},[e._v("chef instructions"),a("OutboundLink")],1),e._v(" as guidance")])]),e._v(" "),a("h3",{attrs:{id:"_13-1-prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-prerequisites"}},[e._v("#")]),e._v(" 13.1. Prerequisites")]),e._v(" "),a("p",[e._v("Since a variety of different practices are used to create an air-gapped network, this guide focuses solely on the implementation of Chef software - as such, it makes the following assumptions:")]),e._v(" "),a("ol",[a("li",[e._v("You have a way to get packages to your air-gapped machines")]),e._v(" "),a("li",[e._v("Machines on your air-gapped network are able to resolve each other using DNS")]),e._v(" "),a("li",[e._v("A server’s Fully Qualified Domain Name (FQDN) is the name that will be used by other servers to access it")]),e._v(" "),a("li",[e._v("You have a private Ruby gem mirror to supply gems as needed")]),e._v(" "),a("li",[e._v("You have an artifact store for file downloads. At a minimum, it should have the following packages available:\n"),a("ol",[a("li",[e._v("Chef Workstation")]),e._v(" "),a("li",[e._v("Chef Infra Client")]),e._v(" "),a("li",[e._v("Chef Supermarket")]),e._v(" "),a("li",[e._v("An "),a("a",{attrs:{href:"https://docs.chef.io/install_chef_air_gap/#create-an-install-script",target:"_blank",rel:"noopener noreferrer"}},[e._v("install script"),a("OutboundLink")],1),e._v(" for Chef Infra Client")])])])]),e._v(" "),a("h3",{attrs:{id:"_13-2-required-cookbooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-2-required-cookbooks"}},[e._v("#")]),e._v(" 13.2. Required cookbooks")]),e._v(" "),a("p",[e._v("This guide will link to the required cookbooks for each piece of software in that software’s respective section, but this is a full list of the cookbooks required to complete the entire guide:")]),e._v(" "),a("p",[e._v("For Chef Supermarket:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://supermarket.chef.io/cookbooks/supermarket-omnibus-cookbook",target:"_blank",rel:"noopener noreferrer"}},[e._v("supermarket-omnibus-cookbook"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://supermarket.chef.io/cookbooks/chef-ingredient",target:"_blank",rel:"noopener noreferrer"}},[e._v("chef-ingredient"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://supermarket.chef.io/cookbooks/hostsfile",target:"_blank",rel:"noopener noreferrer"}},[e._v("hostsfile"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"_13-3-required-gems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-3-required-gems"}},[e._v("#")]),e._v(" 13.3. Required Gems")]),e._v(" "),a("p",[e._v("The following Ruby gems are required to install private Supermarket using the supermarket-omnibus-cookbook:")]),e._v(" "),a("ul",[a("li",[e._v("mixlib-install")]),e._v(" "),a("li",[e._v("mixlib-shellout")]),e._v(" "),a("li",[e._v("mixlib-versioning")]),e._v(" "),a("li",[e._v("artifactory")])]),e._v(" "),a("p",[e._v("These should be accessible from your Gem mirror.")]),e._v(" "),a("h3",{attrs:{id:"_13-4-create-an-install-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-4-create-an-install-script"}},[e._v("#")]),e._v(" 13.4. Create an install script")]),e._v(" "),a("p",[e._v("An install script is used to install Chef Infra Client when bootstrapping a new node. It simply pulls the Chef Infra Client package from your artifact store, and then installs it. For example, on Debian-based Linux systems, it would look similar to this:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/bash")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /tmp/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" http://packages.example.com/chef_13.2.20-1_amd64.deb\ndpkg -i chef_13.2.20-1_amd64.deb\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("The install script should be accessible from your artifact store.")])])}),[],!1,null,null,null);t.default=r.exports}}]);