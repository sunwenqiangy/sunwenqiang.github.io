(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{382:function(t,a,n){"use strict";n.r(a);var s=n(42),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"_237-删除链表中的节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_237-删除链表中的节点"}},[t._v("#")]),t._v(" 237. 删除链表中的节点")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("237. 删除链表中的节点\n请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。\n\n\n现有一个链表 -- head = [4,5,1,9]，它可以表示为:\n\n\n示例 1：\n\n输入：head = [4,5,1,9], node = 5\n输出：[4,1,9]\n解释：给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.\n示例 2：\n\n输入：head = [4,5,1,9], node = 1\n输出：[4,5,9]\n解释：给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.\n \n\n提示：\n\n链表至少包含两个节点。\n链表中所有节点的值都是唯一的。\n给定的节点为非末尾节点并且一定是链表中的一个有效节点。\n不要从你的函数中返回任何结果。\n")])])]),n("h4",{attrs:{id:"解题思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[t._v("#")]),t._v(" "),n("em",[t._v("解题思路")])]),t._v(" "),n("p",[t._v("无法直接获取被删除节点的上一个节点")]),t._v(" "),n("p",[t._v("将被删除节点转移到下个节点")]),t._v(" "),n("h4",{attrs:{id:"解题步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解题步骤"}},[t._v("#")]),t._v(" "),n("em",[t._v("解题步骤")])]),t._v(" "),n("p",[t._v("将被删除接待你的值改为下个节点的值")]),t._v(" "),n("p",[t._v("删除下个节点")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("deleteNode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("时间复杂度： O(1)")]),t._v(" "),n("p",[t._v("空间复杂度： O(1)")])])}),[],!1,null,null,null);a.default=e.exports}}]);