import{_ as J,a as X}from"./CarouselCard.vue_vue_type_script_setup_true_lang-BibV8nn8.js";import{G as f,H as G,R as M,S as m,d as C,U as D,V as Z,i as k,W as B,X as q,Y as L,I as R,Z as E,$ as ee,a0 as Y,a1 as W,a2 as w,c as v,u as b,w as h,a as s,k as c,t as O,O as F,L as _,j as A,A as te,F as H,l as U,C as P,p as y,o as p,f as oe,_ as se,D as ae}from"./app-CvpbwkqW.js";import{B as j}from"./BasicCard-ZmiAZ20f.js";function N(t,a){if(t)return t;let i=a??"button";if(typeof i=="string"&&i.toLowerCase()==="button")return"button"}function re(t,a){let i=f(N(t.value.type,t.value.as));return G(()=>{i.value=N(t.value.type,t.value.as)}),M(()=>{var n;i.value||m(a)&&m(a)instanceof HTMLButtonElement&&!((n=m(a))!=null&&n.hasAttribute("type"))&&(i.value="button")}),i}var ie=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(ie||{});let $=Symbol("DisclosureContext");function T(t){let a=W($,null);if(a===null){let i=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,T),i}return a}let V=Symbol("DisclosurePanelContext");function ne(){return W(V,null)}let le=C({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(t,{slots:a,attrs:i}){let n=f(t.defaultOpen?0:1),o=f(null),u=f(null),e={buttonId:f(`headlessui-disclosure-button-${D()}`),panelId:f(`headlessui-disclosure-panel-${D()}`),disclosureState:n,panel:o,button:u,toggleDisclosure(){n.value=B(n.value,{0:1,1:0})},closeDisclosure(){n.value!==1&&(n.value=1)},close(r){e.closeDisclosure();let d=r?r instanceof HTMLElement?r:r.value instanceof HTMLElement?m(r):m(e.button):m(e.button);d?.focus()}};return E($,e),Z(k(()=>B(n.value,{0:q.Open,1:q.Closed}))),()=>{let{defaultOpen:r,...d}=t,g={open:n.value===0,close:e.close};return L({theirProps:d,ourProps:{},slot:g,slots:a,attrs:i,name:"Disclosure"})}}}),ue=C({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(t,{attrs:a,slots:i,expose:n}){let o=T("DisclosureButton"),u=ne(),e=k(()=>u===null?!1:u.value===o.panelId.value);G(()=>{e.value||t.id!==null&&(o.buttonId.value=t.id)}),R(()=>{e.value||(o.buttonId.value=null)});let r=f(null);n({el:r,$el:r}),e.value||M(()=>{o.button.value=r.value});let d=re(k(()=>({as:t.as,type:a.type})),r);function g(){var l;t.disabled||(e.value?(o.toggleDisclosure(),(l=m(o.button))==null||l.focus()):o.toggleDisclosure())}function S(l){var I;if(!t.disabled)if(e.value)switch(l.key){case w.Space:case w.Enter:l.preventDefault(),l.stopPropagation(),o.toggleDisclosure(),(I=m(o.button))==null||I.focus();break}else switch(l.key){case w.Space:case w.Enter:l.preventDefault(),l.stopPropagation(),o.toggleDisclosure();break}}function x(l){l.key===w.Space&&l.preventDefault()}return()=>{var l;let I={open:o.disclosureState.value===0},{id:z,...K}=t,Q=e.value?{ref:r,type:d.value,onClick:g,onKeydown:S}:{id:(l=o.buttonId.value)!=null?l:z,ref:r,type:d.value,"aria-expanded":o.disclosureState.value===0,"aria-controls":o.disclosureState.value===0||m(o.panel)?o.panelId.value:void 0,disabled:t.disabled?!0:void 0,onClick:g,onKeydown:S,onKeyup:x};return L({ourProps:Q,theirProps:K,slot:I,attrs:a,slots:i,name:"DisclosureButton"})}}}),ce=C({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(t,{attrs:a,slots:i,expose:n}){let o=T("DisclosurePanel");G(()=>{t.id!==null&&(o.panelId.value=t.id)}),R(()=>{o.panelId.value=null}),n({el:o.panel,$el:o.panel}),E(V,o.panelId);let u=ee(),e=k(()=>u!==null?(u.value&q.Open)===q.Open:o.disclosureState.value===0);return()=>{var r;let d={open:o.disclosureState.value===0,close:o.close},{id:g,...S}=t,x={id:(r=o.panelId.value)!=null?r:g,ref:o.panel};return L({ourProps:x,theirProps:S,slot:d,attrs:a,slots:i,features:Y.RenderStrategy|Y.Static,visible:e.value,name:"DisclosurePanel"})}}});const he={class:"text-base font-semibold leading-7"},de=["innerHTML"],pe={key:0,class:"flex gap-2 mt-2 flex-wrap"},me=C({__name:"CollapseSection",props:{question:{},answer:{},show_all:{type:Boolean},buttons:{}},setup(t){return(a,i)=>(p(),v(b(le),{as:"div"},{default:h(({open:n})=>[s("dt",null,[c(b(ue),{class:"flex w-full items-start justify-between text-left text-white cursor-pointer transition-all hover:bg-brand-950 px-4 py-2 rounded-2xl"},{default:h(()=>[s("span",he,O(t.question),1),c(F,{class:"ml-6 flex h-7 items-center"},{default:h(()=>[n||t.show_all?(p(),v(b(_),{key:0,icon:"memory:minus",class:"size-6","aria-hidden":"true"})):(p(),v(b(_),{key:1,icon:"memory:menu-down",class:"size-6 flex-none","aria-hidden":"true"}))]),_:2},1024)]),_:2},1024)]),c(F,null,{default:h(()=>[c(b(ce),{as:"dd",class:"mt-2 bg-brand-950 rounded-2xl py-2 px-4"},{default:h(()=>[s("div",{class:"text-base leading-7 text-gray-300",innerHTML:t.answer},null,8,de),t.buttons.length>0?(p(),A("div",pe,[(p(!0),A(H,null,U(t.buttons,o=>(p(),v(P,{title:o.title,external_link:"",href:o.href,icon:o.icon},{default:h(()=>[y(O(o.title),1)]),_:2},1032,["title","href","icon"]))),256))])):te("",!0)]),_:1})]),_:1})]),_:1}))}}),fe={class:"p-6 flex flex-col gap-4 lg:grid grid-cols-3"},ge={class:"lg:order-last flex flex-col gap-4"},ye={class:"lg:col-span-2"},we={class:"bg-brand-950 p-4 sm:rounded-2xl mb-4"},Ce=C({__name:"(Index)",setup(t){const a=oe({search:""}),i=[{question:"Can I use the art I find here? How should I credit the artist?",answer:`<p>
                        Yes, you can use any of the art submitted to this site. Even in commercial projects. Just be sure to adhere to the license terms.
                        Artists often indicate how they would like to be credited in the "Copyright/Attribution Notice:" section of the submission. You can find
                        this between the submission's description and the list of downloadable files. If no Copyright/Attribution Notice instructions are given,
                        a good way to credit an author for any asset is to put the following text in your game's credits file and on your game's credits screen:
                    </p>
                    <br />
                    <p>"[asset name]" by [author name] licensed [license(s)]: [asset url]</p>
                    <br />
                    <p>For example:</p>
                    <br />
                    <p>
                        "Whispers of Avalon: Grassland Tileset" by Leonard Pabin licensed CC-BY 3.0, GPL 2.0, or GPL 3.0:
                        <a href="https://opengameart.org/node/300">https://opengameart.org/node/3009</a>
                    </p>`,buttons:[]},{question:"Can I upload content by someone other than me? What about anonymous, public domain art?",answer:`<p>
                        Yes, but only under specific circumstances. To upload content created by someone other than yourself, you must first make absolutely
                        certain that the content has been released under one of the allowed licenses. Furthermore, you must attribute their work to them in the
                        Author field. Failing to do so is plagiarism, and will result in the work being removed along with a possible suspension of your
                        account. Finally, regardless of the license the art is released under, if the artist has specifically requested that their work not be
                        distributed from other websites, Open Game Art honors those requests and will not accept submissions of their art.
                    </p>
                    <br />
                    <p>
                        In the case of Public Domain (or CC0) art that you didn't create yourself, we appreciate if you include a link back to the source of the
                        content. We make an effort to verify that PD content is actually in the public domain before we approve it for the archive, and it
                        speeds things up a lot if we know where you got it. If you're the author of the work and you want to remain anonymous, just mention that
                        in the description.
                    </p>
                    <br />
                    <p>
                        Finally, some licensed works may have specific attribution requirements that go above and beyond just listing the author of the work. If
                        so, please list those requirements in the description.
                    </p>
                    <br />
                    <p>
                        Finally, as a courtesy to the artist, we appreciate if you include a link back to their portfolio (or the page you obtained it from)
                        even if it's not required by the license. If this information isn't readily available and it's not required, don't worry about it.
                    </p>`,buttons:[]},{question:"Someone uploaded my art here without my permission. Can you take it down?",answer:`<p>Yes, but please keep in mind that if you released your content under any Creative Commons license that allows derivative works, and the work displays shows the correct license and is attributed to you, then it is legal for that content to be here. If the attribution or license are incorrect, we would prefer to correct them rather than take the content down. However, we will remove all art at the author's request regardless of license, provided we can reasonably verify that you're the real author.</p>
                    <br>
                    <p>If your art is on this site and you would like it taken down, please use the Removal Request form. Be sure to include the links to any art in question.</p>
                    <a href href="">
                        Submission Guidelines
                    </a>
                    <br>
                    <p>Note that there is one case in which take-down requests will not be honored: If your art is derived from a work that was a paid commission by OpenGameArt.org, we reserve the right to archive it here. Please understand that this right is a condition of the licenses (GPL 2&3, CC-BY-SA 3) that we release the exclusive commissions under.</p>`,buttons:[{title:"Submission Guidelines",href:"https://opengameart.org/content/art-submission-guidelines",icon:"memory:arrow-right-circle"}]},{question:"I'm a commercial (closed-source) game developer. Can I use this art?",answer:`<p>Short answer: Yes, you can use this art. Even in commercial projects.</p>
                    <br>
                    <p>Be sure to follow the terms of the license, though. The terms depend on the license(s) the art is released under. Please refer to the summary descriptions of each license below: What do the licenses mean?</p>`,buttons:[{title:"What do the license mean?",href:"https://opengameart.org/content/faq#q-proprietary",icon:"memory:arrow-right-circle"}]},{question:"What do the licenses mean?",answer:`<p>
                        Below are summary descriptions of the licenses supported by OGA. These are provided to help artists and developers familiarize
                        themselves with the broad outlines of each license. Nothing written here is guaranteed to be correct or intended to be used as legal
                        advice. Please read the complete text of each license before using it for a submission or using a work submitted under that license. The
                        full license text can be found at the link in the respective license abbreviations below:
                    </p>
                    <br />
                    <dl>
                        <dt>
                            <a id="q-license-cc0" name="q-license-cc0"></a><strong>Creative Commons 0</strong> "(<a
                                href="https://creativecommons.org/publicdomain/zero/1.0/"
                                target="_blank"
                            >
                                CC0 </a
                            >)"
                        </dt>
                        <dd>
                            This license is the creative commons team's equivalent of public domain. Works released under this license may be copied, modified,
                            distributed, performed or otherwise used in anyway without asking, crediting or notifying the creating artist.
                        </dd>
                        <dd><strong>If you are using art</strong>, this license means commercial use is ok.</dd>
                        <dd><strong>If you are submitting art</strong>, this license means you are giving the work to the Public Domain.</dd>
                    </dl>
                    <br />
                    <dl>
                        <dt>
                            <a id="q-license-ccby" name="q-license-ccby"></a><strong>Creative Commons Attribution</strong> ("<a
                                href="http://creativecommons.org/licenses/by/3.0/"
                                target="_blank"
                                >CC-BY 3.0</a
                            >" and "<a href="http://creativecommons.org/licenses/by/4.0/" target="_blank">CC-BY 4.0</a>")
                        </dt>
                        <dd>
                            Works released under these licenses may be copied, modified, distributed, performed or otherwise used in anyway without asking,
                            subject to following restrictions:
                            <ol>
                                <li>
                                    You must state that you have used the work and credit the original artist. Appropriate credit includes providing the title
                                    of the work, the name of the creator and attribution parties, a copyright notice, a license notice, a disclaimer notice, and
                                    a link to the material.
                                </li>
                                <li>You must indicate if you have made changes to the work</li>
                                <li>
                                    You may not impose any additional restrictions on the redistribution of the work. In practice, this means the work may not
                                    be not used on distribution networks that use some form of Digital Rights Management (DRM).
                                </li>
                            </ol>
                        </dd>
                        <dd>
                            <strong>If you are using art</strong>, these licenses mean commercial use is ok, so long as you provide appropriate credit and
                            distribute the work in a way that does not include DRM.
                        </dd>
                        <dd>
                            <strong>If you are submitting art</strong>, these licenses mean people are free to use your work but must credit you as its author
                            and can not use it on platforms that include some form of DRM.
                        </dd>
                        <dd>
                            Note that many game distribution networks do use DRM (ie. Apple iOS, Xbox Live, Sony PSN) and others may or may not use DRM
                            depending on how a developer chooses to package a particular game (ex. Steam, Google Android).
                        </dd>
                    </dl>
                    <br />
                    <dl>
                        <dt>
                            <a id="q-license-ccbysa" name="q-license-ccbysa"></a><strong>Creative Commons Attribution-Share Alike</strong> ("<a
                                href="http://creativecommons.org/licenses/by-sa/3.0/"
                                target="_blank"
                                >CC-BY-SA 3.0</a
                            >" and "<a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC-BY-SA 4.0</a>")
                        </dt>
                        <dd>
                            These licenses are extensions of the CC-BY licenses (<a href="#q-license-ccby">enumerated above</a>) which include provisions
                            stating that derivative works must also be distributed under the same license. Works released under this license may be copied,
                            modified, distributed, performed or otherwise used in anyway without asking, subject to following restrictions:
                            <ol>
                                <li>
                                    You must obey all of the restrictions of the corresponding CC-BY license (<a href="#q-license-ccby">enumerated above</a>)
                                </li>
                                <li>If you make derivative works, you must distribute them under the same license (CC-BY-SA 3.0/CC-BY-SA 4.0)</li>
                            </ol>
                        </dd>
                        <dd>
                            <strong>If you are using art</strong>, these licenses mean commercial use is ok, so long as you provide appropriate credit, don't
                            distribute the work in a way that includes DRM, and are prepared (and able) to release your derivatives of the art under the same
                            license.
                        </dd>
                        <dd>
                            <strong>If you are submitting art</strong>, these licenses mean people are free to use your work but must credit you as its author,
                            people can not use it on platforms that include some form of DRM, and must distribute any changes or otherwise derivative works they
                            make under the same license.
                        </dd>
                    </dl>
                    <br />
                    <dl>
                        <dt>
                            <a id="q-license-ogaby" name="q-license-ogaby"></a><strong>OpenGameArt.org Attribution</strong> ("<a
                                href="http://opengameart.org/content/oga-by-30-faq"
                                target="_blank"
                                >OGA-BY 3.0</a
                            >" and "<a href="http://opengameart.org/content/oga-by-40-faq" target="_blank">OGA-BY 4.0</a>")
                        </dt>
                        <dd>
                            These licenses are derivatives of the CC-BY licenses (<a href="#q-license-ccby">enumerated above</a>) which removes the restriction
                            against technical measures that prevent redistribution of a work. (eg. DRM) It was created to provide an option for artists wishing
                            to be credited for their work but not wanting to restrict its distribution on DRM-using platforms. Works released under this license
                            may be copied, modified, distributed, performed or otherwise used in anyway without asking, subject to following restrictions:
                            <ol>
                                <li>
                                    You must state that you have used the work and credit the original artist. Appropriate credit includes providing the title
                                    of the work, the name of the creator and attribution parties, a copyright notice, a license notice, a disclaimer notice, and
                                    a link to the material.
                                </li>
                                <li>You must indicate if you have made changes to the work.</li>
                            </ol>
                        </dd>
                        <dd><strong>If you are using art</strong>, these licenses mean commercial use is ok, so long as you provide appropriate credit.</dd>
                        <dd>
                            <strong>If you are submitting art</strong>, these licenses mean people are free to use your work but must credit you as its author.
                        </dd>
                    </dl>
                    <br />
                    <dl>
                        <dt>
                            <a id="q-license-ogaby" name="q-license-gpl"></a><strong>GNU General Public License</strong> ("<a
                                href="http://www.gnu.org/licenses/gpl-2.0.html"
                                target="_blank"
                            >
                                GPL 2.0
                            </a>
                            " and "<a href="http://www.gnu.org/licenses/gpl-3.0.html" target="_blank">GPL 3.0</a>")
                        </dt>
                        <dd>
                            These licenses were written with source code in mind, and are included on OGA for compatibility with projects that use GPL licenses.
                            GNU has provided some guidance for how these licenses may apply to art or other 'non-source-code' items
                            <a href="http://www.gnu.org/licenses/gpl-faq.en.html#GPLOtherThanSoftware" target="_blank">here</a>. However, they have yet to
                            provide specific guidance for how the licenses apply in most common video game art use scenarios (eg. using a sprite sheet licensed
                            as GPL 2.0).
                        </dd>
                        <dd>
                            <strong>If you are using art</strong>, use with GPL licensed projects is ok. Those working on non-GPL licensed projects (eg. closed
                            source, commercial or non-GPL open source development) are encouraged to fully understand GNU GPL and how art work licensed as such
                            may affect their projects.
                        </dd>
                        <dd>
                            <strong>If you are submitting art</strong>, you should use these licenses only if it is already part of a project that uses a GPL
                            license and/or you have read the full license and know what you are doing.
                        </dd>
                    </dl>
                    <br />
                    <p>
                        Just to reiterate, these notes are based on our understanding of these licenses, and should be taken with a grain of salt. If you notice
                        anything incorrect here, please contact us.
                    </p>`,buttons:[{title:"CC0",href:"https://creativecommons.org/publicdomain/zero/1.0/",icon:"memory:arrow-right-circle"},{title:"CC-BY 3.0",href:"https://creativecommons.org/licenses/by/3.0/",icon:"memory:arrow-right-circle"},{title:"CC-BY 4.0",href:"https://creativecommons.org/licenses/by/4.0/",icon:"memory:arrow-right-circle"},{title:"GPL 2.0",href:"https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",icon:"memory:arrow-right-circle"},{title:"GPL 3.0",href:"https://www.gnu.org/licenses/gpl-3.0.html",icon:"memory:arrow-right-circle"}]},{question:"What kind of art can I submit?",answer:`<p>
                        You can submit any art that could be used as game art, provided that it's your original work. The following kinds of art do not qualify:
                    </p>
                    <br />
                    <ul class="list-disc pl-6">
                        <li>Modifications of existing commercial game art</li>
                        <li>Art that's your work, but is clearly non-free IP (for instance, a sprite of Gordon Freeman from Half Life)</li>
                        <li>Art that wouldn't be useful in a game</li>
                    </ul>
                    <br>
                    <p>
                        If you wish to submit modifications of freely-licensed artwork created by someone else, you may do so, provided that you submit it with
                        the original license and credit the original artist(s) in whatever way the license requires. If the artwork you're altering doesn't use
                        one of the licenses that <strong>Open Game Art</strong> accepts, then it is <em>not&nbsp;</em>okay to submit it.
                    </p>`,buttons:[]},{question:"I want to help, but I'm not an artist. What can I do?",answer:`<p>A couple of things:</p>
                    <br />
                    <ul class="list-disc pl-6">
                        <li>
                            <a class="views-processed" href="/contact">Contact us</a> if you want to be a site maintainer or have interesting things to blog
                            about that relate to open source game development and art.
                        </li>
                        <li>
                            From time to time, we commission artists to create free art. If you're interested in donating money to the cause, you can donate to
                            our PayPal account. All donations will go directly toward art commissions (as opposed to, say, hosting costs).
                        </li>
                    </ul>`,buttons:[{title:"Contact Us",href:"https://opengameart.org/contact",icon:"memory:arrow-right-circle"},{title:"Read More",href:"https://opengameart.org/content/donate-opengameartorg",icon:"memory:arrow-right-circle"}]},{question:"Can I use this art in my Free/Open Source game?",answer:`<p>Yes.</p>
                    <br />
                    <p>
                        More specifically, the licenses that can be selected on this site are meant to be GPL-compatible. Thus, if you're releasing your project
                        under the GPL, it is safe to use any and all of the art on this site. Note that there is a common misconception with using CC-licensed
                        media with GPLed code, which I address here.
                    </p>
                    <br />
                    <p>
                        If you are releasing your project under some other Free and/or Open Source license (or not releasing your source code at all), it's
                        likely that there could be licensing conflicts depending on what license the art is released under. It is your responsibilityto verify
                        the compatibility of the art license with the license you are using.
                    </p>`,buttons:[{title:"Aren't CC-BY and CC-BY-SA incompatible with the GPL?",href:"https://opengameart.org/content/faq#arent-cc-and-cc-sa-incompatible-gpl",icon:"memory:arrow-right-circle"}]},{question:"Aren't CC-BY and CC-BY-SA incompatible with the GPL?",answer:`<p>
                        That depends on what you mean by "compatible". They are incompatible in the sense that you can't take someone else's CC-BY or CC-BY-SA
                        content and slap the GPL on them, and you can't write code licensed under one of those licenses and mingle it with GPLed code. However,
                        for the intent of creating and distributing games, the Free Software Foundation has clarified that the game code and game media are
                        separate entities and do not need to be released under the same license, provided those licenses allow you to copy and redistribute the
                        work for both commercial and non-commercial purposes. Here's what the FSF has to say about this:
                    </p>
                    <br />
                    <blockquote>
                        <p><strong>Non-functional Data</strong></p>
                        <p>
                            Data that has an aesthetic purpose, rather than a functional one, may be included in a free system distribution as long as its
                            license gives you permission to copy and redistribute, both for commercial and non-commercial purposes. For example, there are some
                            game engines that have been released under the GNU GPL, and have accompanying game information -- a world map, game graphics, and so
                            on -- released under such a verbatim distribution license. This kind of data can be part of a free system distribution.
                        </p>
                        <p>
                            <em
                                >Source:
                                <a href="http://www.gnu.org/philosophy/free-system-distribution-guidelines.html"
                                    >http://www.gnu.org/philosophy/free-system-distribution-guidelines.html</a
                                ></em
                            >
                        </p>
                    </blockquote>
                    <br />
                    <p>
                        What this means for you as a developer is that the game data should be clearly marked as such, along with the licensing information for
                        that data.
                    </p>
                    <br />
                    <p>
                        It is also worth noting that CC-BY-SA 3.0 is
                        <a class="ext views-processed" href="https://wiki.debian.org/DFSGLicenses#CreativeCommonsShare-Alike.28CC-SA.29v3.0">Debian approved</a
                        >.
                    </p>`,buttons:[{title:"Free System Distribution Guidelines",href:"https://www.gnu.org/distros/free-system-distribution-guidelines.html",icon:"memory:arrow-right-circle"},{title:"Debian Approved",href:"https://wiki.debian.org/DFSGLicenses#CreativeCommonsShare-Alike.28CC-SA.29v3.0",icon:"memory:arrow-right-circle"}]},{question:"I have some content under the WTFPL. Can I submit it?",answer:`<p>
                        Yes!
                    </p>
                    <br />

                    <p>
                        The WTFPL (warning: strong language) is a highly permissive license, in that it allows you to do whatever you want with content, including re-licensing it.
                        Simply remove the WTFPL text file from the distribution and upload it as CC0. You may do the same thing with content released as "Public Domain",
                        provided you are doing so in a jurisdiction that recognizes a public domain.
                    </p>`,buttons:[]},{question:"There is an interesting feature in a preview, but I can't find that component in the download file. Can I use the preview instead?",answer:`<p>
                        Short answer: no.
                    </p>
                    <br />

                    <p>
                        A submission's preview images or preview audio clips may not fall under the same license as the submission's assets available for
                        download. Previews are for demonstration purposes and may contain works or logos not intended as freely licensed content.
                        Unless otherwise noted, assume the previews are 'All rights reserved'.
                    </p>`,buttons:[]},{question:"Can I use the art downloaded here in the Apple App Store or other similar stores?",answer:`<p>
                        Not necessarily.
                    </p>
                    <br />

                    <p>
                       Apple's App Store in particular has been found to have usage terms that conflict
                       with the terms of the GNU GPL, the GNU LGPL, CC-BY-SA, and CC-BY. However, many
                       artists releasing works under these licences are fine with their works being used
                       in the app store if you get their permission.
                    </p>
                    <p>
                       Note that OpenGameArt.org cannot grant you this permission, you must ask the artist directly.
                       If the art you want to use is a derivative work of another piece of art, or is by multiple authors,
                       you must get permission from all of the authors.
                    </p>`,buttons:[]},{question:"Can I still sell art that I've contributed to OpenGameArt.org?",answer:`<p>
                       Short answer: yes.
                    </p>
                    <br />

                    <p>
                       The long answer is that, even if OGA explicitly paid you money to create art, we do not (nor will we ever)
                       take possession of the copyright to that art.  This means that you can still license your artwork however
                       you want, to whomever you want.
                    </p>
                    <p>
                       Let's say, for example, that you create a set of game graphics and release them here on OGA under the CC-BY-SA license.
                       If someone would like to use and alter your art without sharing it, they are free to contact you and obtain a license
                       to do so.  You are free to charge them for this license.
                    </p>
                    <p>
                       Now, there are a couple of catches.  While we will take down any artwork of yours that you request we take down
                       (provided you can provide reasonable proof that you're the author of that work, and that we didn't conpensate you for it),
                       that work is already perpetually licensed CC-BY-SA, and anyone who has already downloaded it has the right to continue using
                       and distributing it under that same license.  They do not, however, have the right to license your work to third parties under
                       different terms.
                    </p>
                    <p>
                       Furthermore, if you have plans to sell your contributed art to third parties, it is highly recommended that you select either CC-BY-SA,
                       the GPL, or some combination of the two, as there is little motivation for a commercial interest to pay you for the privilege of using
                       your art if you've already granted that privilege without requiring them to share.
                    </p>`,buttons:[]},{question:"I'm a commercial artist. Can I use OpenGameArt.org to advertise my paid work?",answer:`<p>
                       Absolutely, in fact several artists are already doing precisely that.  All you need to do is pick a work of yours
                       that you think people would be interested in, and submit it to OGA under any of the license choices that we offer.
                       When you submit your art, be sure to include a link back to your web page or portfolio in the submission.  You may also
                       want to mention in the description that you work on commission.  If you release your art under CC-BY or CC-BY-SA, you can
                       mention in the description that people should link back to your website when they attribute you for your work.
                    </p>
                  `,buttons:[]},{question:"Does the GPL have an attribution requirement? How should I attribute GPLed works here on OGA?",answer:`<p>
                       Attribution is an optional part of the GPL, however you should assume that all work contained on
                       OpenGameArt requires it unless otherwise specified by the author of the work.  Attribution requirements
                       are specifically allowed under section 7, part B of the GPL.
                    </p>
                    <br />
                    <p>
                       b) Requiring preservation of specified reasonable legal notices or author attributions in that material or in the Appropriate Legal Notices displayed by works containing it
                    </p>
                    <br />
                    <p>
                       The full text of the GPL can be found here:
                    </p>
                    <br />
                    <p>
                       http://www.gnu.org/licenses/gpl.html
                    </p>
                    <br />
                    <p>
                       Please note that this doesn't allow the author to place additional restrictions on a GPLed work, unless they are specifically listed in section 7.
                    </p>
                  `,buttons:[{title:"GPL",href:"http://www.gnu.org/licenses/gpl.html",icon:"memory:arrow-right-circle"}]},{question:"Some artists have multiple licenses listed. Does that mean you need apply the rules of all licenses or can we pick the one license we prefer?",answer:`<p>
                      You must follow only one of the licenses. However, when you re-distribute/edit, you are encouraged to include/use all of the licenses, so the license spectrum (and thus sum of people/projects who can use the art) doesn't shrink.
                    </p>
                   `,buttons:[]},{question:"Can an artist edit and change their license requirements? If so, what impact would that have on me and my project that already uses that asset?",answer:`<p>
                      These questions go together but are best answered separately:
                    </p>
                    <br />
                    <p>
                     Can an artist edit and change their license requirements?
                    </p>
                    <br />
                    <p>
                     Yes, an artist may change their license requirements, at any time, however...
                    </p>
                           <br />
                    <p>
                     If so, what impact would that have on me and my project that already uses that asset?
                    </p>
                           <br />
                    <p>
                    We encourage you to respect the wishes of the artist if they decide to change the license on their work, however you are under absolutely no
                    obligation to do so, because the license you obtained it under is irrevocable.  In practice, very few (if any) artists on OGA ever remove
                    licensing options, although occasionally some add more.
                    </p>
                   `,buttons:[]},{question:"I made a 3D model (or song), but I'm not sure where I got my textures (or samples). Can I submit it?",answer:`<p>
                      Short answer: no.
                    </p>
                    <br />
                    <p>
                     Unfortunately, a lot of texture and sample websites have "not for commercial use" or other odd restrctions that made their content completely incompatible with the licenses we have here.
                    </p>
                    <br />
                    <p>
                     Please note that we would still love for you to submit your 3D model or song.  Please remove the textures or samples that you can't track down, and, if possible, replace them with something
                     that you can verify is under a free license.  If you know where to find the person who made the textures or samples, try contacting them first, as many people are open to changing the license on
                     their work.
                    </p>
                           <br />
                    <p>
                     Worst case scenario, if you can't find any replacement textures, just submit the model with no texture.  In the case of music, replace the sample with a placeholder and upload a midi file along with it so that people can fill it in later.
                    </p>
                           <br />
                   <p><strong>There are some popular sites that we cannot accept material from:</strong></p>
                    <ul class="list-disc pl-6">
                        <li>
                            <strong
                                >freesound.org (which uses the CC Sampling Plus license, which is not compatible with Debian's license guidelines).&nbsp; If the
                                author of the sound agrees to a different license, you can still post it here, so ask them first.<br
                            /></strong>
                        </li>
                        <li><strong>cgtextures.com (which uses a custom license that's not compatible with Debian's license guidelines)</strong></li>
                    </ul>
                    <p><strong>You should consider instead looking at these archives:</strong></p>
                    <ul class="list-disc pl-6">
                        <li>
                            <strong
                                ><a class="ext views-processed" href="http://www.burningwell.org/">Burningwell.org</a>'s all public domain
                                <a class="ext views-processed" href="http://www.burningwell.org/gallery2/v/textures">texture gallery</a></strong
                            >
                        </li>
                        <li>
                            <strong><a class="ext views-processed" href="http://www.musopen.com/music.php">Musopen</a>(for public domain music)</strong>
                        </li>
                        <li>
                            <strong><a class="ext views-processed" href="http://wiki.laptop.org/go/Sound_samples">The OLPC Sound Sample Archive</a></strong>
                        </li>
                        <li>
                            <strong><a class="ext views-processed" href="http://www.pdsounds.org/">pdsounds</a></strong>
                        </li>
                        <li><strong>Right here on OGA</strong></li>
                    </ul>
                   `,buttons:[{title:"Burningwell.org",href:"https://www.burningwell.org/",icon:"memory:arrow-right-circle"},{title:"Musopen.org",href:"https://musopen.org/",icon:"memory:arrow-right-circle"},{title:"The OLPC Sound Sample Archive",href:"https://wiki.laptop.org/go/Free_sound_samples",icon:"memory:arrow-right-circle"},{title:"pdfsounds",href:"https://www.pdsounds.org/lander",icon:"memory:arrow-right-circle"}]},{question:"Aren't there other sites out there like this?",answer:`<p>
                      Yes and no.
                    </p>
                    <br />
                    <p>
                     There are plenty of other sites out there, but they aren't necessarily conducive to finding good game art that
                     can be used legally in open source games. To be a good source for this kind of content, a site should be:
                    </p>
                    <br />
<ul class="list-disc pl-6">
                        <li>Human-edited for quality</li>
                        <li>Clear about licensing, so that you're sure any art on the site can legally be used in a Free/Open Source game or other program</li>
                        <li>Have firm ground rules about what can be submitted</li>
                    </ul>
                    <p>
                        Some art sites serve as places where artists can post their work and get critiques. While some of these artists are willing to license
                        their work out in a way that's compatible with free/open source software, it can be very difficult to find art that's appropriately
                        licensed.
                    </p>
                    <p>
                        Other sites provide sprites for use, but they allow people to contribute sprites that have been "ripped" from games, and are therefore
                        in violation of copyright.
                    </p>
                    <p>
                        Finally, it should be noted that <a class="ext views-processed" href="http://search.freegamedev.net/">Free Art Search</a> provides a
                        massive index of a lot of art that already exists in Free/Open Source projects and is a great place to go if you're searching for open
                        art.
                    </p>
                   `,buttons:[{title:"Free Art Search",href:"http://search.freegamedev.net/",icon:"memory:arrow-right-circle"}]},{question:"What's the purpose of this site?",answer:`<p>
                      If you've ever browsed Free/Open Source game sites (such as The Linux Game Tome, you'll notice that a fairly significant number of the games available suffer from what's lovingly referred to
                      as 'programmer art'. There are, of course, some notable exceptions to this, but it's clear that, for an open source game to produce good art, it has to become large and popular enough to attract artists.
                    </p>
                    <br />
                    <p>
                     Unfortunately, many fun and well-designed games never reach this point and are thus stuck with placeholder art, which ultimately detracts from their appeal and popularity. Furthermore,
                     it's not unheard of for open source projects to rip their placeholder art from commercial games, which is illegal and could conceivably result in a lawsuit.
                    </p>
                    <br />

                    <p>
                        The purpose of this site is to provide a solid (and hopefully ever-expanding) variety of high quality, freely licensed art, so that free/open source game developers can use it in their games.
                    </p>

                   `,buttons:[]},{question:"IRC / Web Chat rules",answer:`<p>
                     Just a quick summary of rules for IRC and Web Chat:
                    </p>
                    <br />
                    <p>
                     Unfortunately, many fun and well-designed games never reach this point and are thus stuck with placeholder art, which ultimately detracts from their appeal and popularity. Furthermore,
                     it's not unheard of for open source projects to rip their placeholder art from commercial games, which is illegal and could conceivably result in a lawsuit.
                    </p>
                    <br />

                    <p>
                        The purpose of this site is to provide a solid (and hopefully ever-expanding) variety of high quality, freely licensed art, so that free/open source game developers can use it in their games.
                    </p>
<ul class="list-disc pl-6">
                        <li>
                            If you're not already aware, our IRC channel is
                            <a class="ext views-processed" href="http://webchat.freenode.net/?channels=opengameart">#opengameart</a>
                        </li>
                        <li>
                            This should go without saying, but hateful comments of any sort will get you immediately kicked and banned.&nbsp; No exceptions.
                        </li>
                        <li>Try to keep foul language to a minimum.</li>
                        <li>
                            No religion or politics.&nbsp; If you want to discuss those and aren't offended by opposing viewpoints, we have an offtopic,
                            anything-goes channel called
                            <a class="ext views-processed" href="http://webchat.freenode.net/?channels=opengameart-blah">#opengameart-blah</a> for that sort of
                            thing.&nbsp; The only rule in #opengameart-blah is that you treat other people with respect.
                        </li>
                        <li>Politics directly related to games, art, and copyright are an exception to the above rule, and are frequently discussed.</li>
                    </ul>
                    <p>
                        If you're looking for Bart (the site founder), he can often be found as <strong>BartK</strong>.&nbsp; Sometimes he goes by
                        <strong>Legend&nbsp;</strong>or <strong>Lendrick</strong>, depending on what computer he's on.
                    </p>
                    <p>
                        If there's a problem with the site, generally it's sufficient just to mention it in the channel.&nbsp; However, you can also message
                        Bart (using the above nicks), or any of these other people:
                    </p>
                    <p>Admins</p>
                    <ul class="list-disc pl-6">
                        <li><a href="/users/medicinestorm">MedicineStorm</a></li>
                        <li><a class="views-processed" title="View user profile." href="/users/ceninan">ceninan</a></li>
                        <li><a class="views-processed" title="View user profile." href="/users/qubodup">qubodup</a></li>
                        <li><a class="views-processed" title="View user profile." href="/users/clint-bellanger">Clint Bellanger</a></li>
                        <li><a href="/users/redshrike">Redshrike</a></li>
                        <li><a class="views-processed" title="View user profile." href="/users/p0ss">p0ss</a></li>
                    </ul>
                    <p>Editors</p>
                    <ul class="list-disc pl-6">
                        <li><a class="views-processed" title="View user profile." href="/users/verbalshadow">verbalshadow</a></li>
                        <li><a href="/users/sharm">Sharm</a></li>
                    </ul>
                   `,buttons:[]},{question:"How can I put a Flattr icon on my art pages?",answer:`<p>
                     Edit your account by clicking on "My Account" above and then selecting the "Edit" tab.  Scroll down and enter your Flattr UserID.
                    </p>
                    <br />
                    <p>
                   That's all there is to it!
                    </p>

                   `,buttons:[]}],n=k(()=>{if(!a.search)return i;const u=a.search.toLowerCase();return i.filter(e=>e.question.toLowerCase().includes(u)||o(e.answer).toLowerCase().includes(u))}),o=u=>{const e=document.createElement("div");return e.innerHTML=u,e.textContent||e.innerText||""};return(u,e)=>(p(),A("div",null,[c(J),c(X),s("div",fe,[s("div",ge,[c(j,{icon:"memory:alert-box",title:"Instruction"},{default:h(()=>[e[3]||(e[3]=s("p",{class:""},"If you have a question that you think should be here, contact us via the Contact form and let us know.",-1)),c(P,{icon:"memory:chat",external_link:"",href:"https://opengameart.org/contact"},{default:h(()=>[...e[1]||(e[1]=[y("Contact Form",-1)])]),_:1}),e[4]||(e[4]=s("p",{class:""},"Please read our content submission guidelines before posting art.",-1)),c(P,{icon:"memory:chat",external_link:"",href:"https://opengameart.org/content/art-submission-guidelines"},{default:h(()=>[...e[2]||(e[2]=[y(" Submission Guidelines ",-1)])]),_:1})]),_:1}),c(j,{icon:"memory:alert-box",title:"Forum Rules"},{default:h(()=>[...e[5]||(e[5]=[s("p",null,[s("strong",null,"The basics:")],-1),s("ul",{class:"list-disc pl-6"},[s("li",null,"No discussion of religion."),s("li",null,"No discussion of politics, except relating directly to copyright, the Creative Commons, and/or FOSS."),s("li",null,"Don't be racist, homophobic, or otherwise hateful.")],-1),s("br",null,null,-1),s("p",null,[s("strong",null,"Conduct:")],-1),s("p",null," On some forums, it is okay to be snide.  That isn't acceptable here.  As a FOSS gaming community, we are ambassadors of FOSS in general, and as such it is not acceptable to be rude to people who are interested enough in what we do to take the time to ask questions.  Specifically, it is not okay to do the following: ",-1),s("ul",{class:"list-disc pl-6"},[s("li",null,'Say something along the lines of "READ TEH FAQ U IDIOT"'),s("li",null,"Reply to a question with a link to a google search"),s("li",null,'Say "SOMEONE ALREADY ASKED THIS READ TEH FORUM U IDIOT"'),s("li",null,"Talk down to anyone because of their choice of software or operating system")],-1),s("p",null,[y(" On the other hand, it's quite possible that we'll get certain questions over and over, which is the reason FAQs exist in the first place.  It "),s("em",null,"is"),y(" acceptable to reply with a link to a relevant FAQ question "),s("em",null,"provided you read their post carefully and make sure that it actually applies"),y(".  Just try to understand that when someone asks a question in a forum, they're looking for a personalized answer, and it's better to provide one and encourage discussion than just send them off to a FAQ link. ")],-1)])]),_:1})]),s("div",ye,[e[6]||(e[6]=s("h2",{class:"text-2xl font-bold leading-10 tracking-tight text-white mb-6"},"Frequently asked questions",-1)),s("div",we,[c(se,{modelValue:a.search,"onUpdate:modelValue":e[0]||(e[0]=r=>a.search=r),name:"Search"},null,8,["modelValue"])]),c(ae,{class:"flex flex-col gap-4"},{default:h(()=>[(p(!0),A(H,null,U(n.value,r=>(p(),v(me,{question:r.question,answer:r.answer,show_all:a.search!="",buttons:r.buttons},null,8,["question","answer","show_all","buttons"]))),256))]),_:1}),e[7]||(e[7]=s("div",{class:"TEST"},null,-1))])])]))}});export{Ce as default};
