(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a(246)},110:function(e,t,a){},112:function(e,t,a){},246:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(37),r=a.n(i),s=(a(110),a(19)),l=a(20),c=a(22),m=a(21),h=a(23),u=a(104),d=a(11),g=a(252),p=a(251),f=(a(112),a(33)),v=a.n(f),b=a(100),w=a.n(b),y=a(52),E=a.n(y),k=a(10),T=a.n(k),C=a(30),S=a(49),O=a.n(S),j=a(50),N=a.n(j),A=a(24),B=a.n(A),M=a(98),L=a.n(M),R=a(39),x=a.n(R),I=a(99),P=a.n(I),W=a(28),F=a(67),H=a.n(F),D=a(97),G=a.n(D),U=a(38),z=a.n(U),$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;a.setState({isLoading:!0}),setTimeout(function(){a.props.onSearch(t),a.setState({isLoading:!1})},250*Math.random()+250)},a.toggleSearch=function(){a.setState(function(e){return{showSearch:!e.showSearch}})},a.state={showSearch:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.showSearch,n=t.isLoading;return o.a.createElement("div",{className:e.root},o.a.createElement(v.a,{position:"static",style:{paddingTop:n?"":"5px",marginTop:"-5px"}},n&&o.a.createElement(G.a,{color:"secondary",style:{top:"5px"}}),o.a.createElement(O.a,null,o.a.createElement(N.a,{className:e.menuButton,color:"inherit","aria-label":"Settings Menu"},o.a.createElement(L.a,null)),!a&&o.a.createElement(T.a,{variant:"h6",color:"inherit",className:e.grow},o.a.createElement("div",{className:"logo"},"Chindig")),o.a.createElement(z.a,{smDown:!0},o.a.createElement("div",{className:e.search},o.a.createElement("div",{className:e.searchIcon},o.a.createElement(x.a,null)),o.a.createElement(H.a,{onChange:this.handleChange,placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput}}))),a&&o.a.createElement(z.a,{mdUp:!0},o.a.createElement("div",{className:e.search},o.a.createElement("div",{className:e.searchIcon},o.a.createElement(x.a,null)),o.a.createElement(H.a,{onChange:this.handleChange,placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput}}))),!a&&o.a.createElement(z.a,{mdUp:!0},o.a.createElement(B.a,{className:e.menuButton,color:"inherit","aria-label":"open search button",onClick:this.toggleSearch},o.a.createElement(x.a,null))),a&&o.a.createElement(B.a,{className:e.menuButton,color:"inherit","aria-label":"close search button",onClick:this.toggleSearch},o.a.createElement(P.a,null)))))}}]),t}(o.a.Component),V=Object(d.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12},title:Object(C.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(C.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(W.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(W.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(C.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}}),progress:{margin:2*e.spacing.unit}}})($),J=a(29),_=a.n(J),Y=a(34),q=a.n(Y),K=a(18),Z=a.n(K),Q=a(250),X=function(e){return{input:{display:"none"}}},ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onEventSave=function(e,t){a.props.onSave(t)},a.onEventUnsave=function(e,t){a.props.onUnsave(t)},a.state={events:e.events},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({events:e.events})}},{key:"getDate",value:function(e){return _()(e).format("dddd, MMM Do")}},{key:"getTime",value:function(e){return _()(e).format("h:mm a")}},{key:"render",value:function(){var e=this,t=this.state.events.map(function(t,a){return o.a.createElement(Z.a,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,key:a},o.a.createElement("div",{className:"event"},o.a.createElement("img",{src:"./".concat(t.image),alt:"test"}),o.a.createElement("div",{className:"event-tag"},o.a.createElement(q.a,{label:t.tag,color:"secondary"})),o.a.createElement("div",{className:"event-text"},o.a.createElement(Q.a,{className:"name",to:"/event/"+t.name},t.name),o.a.createElement("div",{className:"location"},"@ ",t.location),o.a.createElement("div",{className:"day"},e.getDate(t.start)),o.a.createElement("div",{className:"time"},e.getTime(t.start))),o.a.createElement("div",{className:"event-save"},!t.saved&&o.a.createElement(B.a,{variant:"contained",color:"primary",className:X.button,onClick:function(a){return e.onEventSave(a,t)}},"Save"),t.saved&&o.a.createElement(B.a,{variant:"contained",color:"secondary",className:X.button,onClick:function(a){return e.onEventUnsave(a,t)}},"Unsave"))))});return o.a.createElement("div",null,o.a.createElement(Z.a,{container:!0,spacing:24},t))}}]),t}(n.Component),te=Object(d.withStyles)(X)(ee),ae=function(e){return{input:{display:"none"}}},ne=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={events:e.events},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({events:e.events})}},{key:"getDate",value:function(e){return _()(e).format("dddd, MMM Do")}},{key:"getTime",value:function(e){return _()(e).format("h:mm a")}},{key:"render",value:function(){var e=this,t=this.state.events.map(function(t,a){return o.a.createElement(Z.a,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,key:a},o.a.createElement("div",{className:"event"},o.a.createElement("img",{src:"./".concat(t.image),alt:"test"}),o.a.createElement("div",{className:"event-tag"},o.a.createElement(q.a,{label:t.tag,color:"secondary"})),o.a.createElement("div",{className:"event-text"},o.a.createElement("div",{className:"name"},t.name),o.a.createElement("div",{className:"location"},"@ ",t.location),o.a.createElement("div",{className:"day"},e.getDate(t.start)),o.a.createElement("div",{className:"time"},e.getTime(t.start))),o.a.createElement("div",{className:"event-save"},o.a.createElement(B.a,{variant:"contained",color:"primary",className:ae.button},"Rate"))))});return o.a.createElement("div",null,o.a.createElement(Z.a,{container:!0,spacing:24},t))}}]),t}(n.Component),oe=Object(d.withStyles)(ae)(ne),ie=function(e){return{input:{display:"none"}}},re=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(c.a)(this,Object(m.a)(t).call(this,e)),console.log("event props",e),a.state={events:e.events},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({events:e.events})}},{key:"getDate",value:function(e){return _()(e).format("dddd, MMM Do")}},{key:"getTime",value:function(e){return _()(e).format("h:mm a")}},{key:"render",value:function(){var e=this,t=this.state.events.map(function(t,a){return o.a.createElement(Z.a,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,key:a},o.a.createElement("div",{className:"event"},o.a.createElement("img",{src:"./".concat(t.image),alt:"test"}),o.a.createElement("div",{className:"event-tag"},o.a.createElement(q.a,{label:t.tag,color:"secondary"})),o.a.createElement("div",{className:"event-text"},o.a.createElement("div",{className:"name"},t.name),o.a.createElement("div",{className:"location"},"@ ",t.location),o.a.createElement("div",{className:"day"},e.getDate(t.start)),o.a.createElement("div",{className:"time"},e.getTime(t.start))),o.a.createElement("div",{className:"event-save"},o.a.createElement(B.a,{variant:"contained",color:"secondary",className:ie.button},"Unsave"))))});return o.a.createElement("div",null,o.a.createElement(Z.a,{container:!0,spacing:24},t,!t.length&&o.a.createElement("div",{className:"text-center"},o.a.createElement("br",null),'No upcoming events saved.  Check out the "Suggested" tab for some indie events we think you\'ll dig.')))}}]),t}(n.Component),se=Object(d.withStyles)(ie)(re),le=a(95);function ce(e){return o.a.createElement(T.a,{component:"div",style:{padding:24}},e.children)}var me=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onSearch=function(e){e=e.toLowerCase();var t=le.filter(function(t){var a=t.name.toLowerCase(),n=t.description.toLowerCase(),o=t.tag.toLowerCase();return-1!==a.indexOf(e)||-1!==n.indexOf(e)||-1!==o.indexOf(e)});a.setState({events:t,query:e})},a.onTabChange=function(e,t){a.setState({value:t})},a.onSaveEvent=function(e){e.saved=!0,a.forceUpdate()},a.onUnsaveEvent=function(e){e.saved=!1,a.forceUpdate()},a.state={value:0,events:le.filter(function(e){return!e.past}),pastEvents:le.filter(function(e){return e.past}),savedEvents:[]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.value,n=t.events,i=t.pastEvents,r=n.filter(function(e){return e.saved});return o.a.createElement("div",{className:e.root},o.a.createElement(V,{onSearch:this.onSearch}),o.a.createElement(v.a,{position:"static",className:e.grow},o.a.createElement(w.a,{value:a,onChange:this.onTabChange,centered:!0,fullWidth:!0},o.a.createElement(E.a,{label:"Suggested"}),o.a.createElement(E.a,{label:"Past"}),o.a.createElement(E.a,{label:"Upcoming (".concat(r.length,")")}))),0===a&&o.a.createElement(ce,null,o.a.createElement("div",{className:"tab-container"},o.a.createElement(te,{events:n,onSave:this.onSaveEvent,onUnsave:this.onUnsaveEvent}))),1===a&&o.a.createElement(ce,{className:"tab-container"},o.a.createElement(oe,{events:i})),2===a&&o.a.createElement(ce,{className:"tab-container"},o.a.createElement(se,{events:r})))}}]),t}(o.a.Component),he=Object(d.withStyles)(function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}})(me),ue=a(101),de=a.n(ue),ge=a(66),pe=a.n(ge),fe=a(53),ve=a.n(fe),be=a(102),we=a.n(be),ye=a(95),Ee=function(e){function t(e){var a;Object(s.a)(this,t);var n=(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).props.match.params.id,o=ye.filter(function(e){return e.name===n})[0];return a.state={eventObj:o},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.eventObj;return console.log("eventObj",t),o.a.createElement("div",{className:e.root},o.a.createElement(v.a,{position:"static"},o.a.createElement(O.a,null,o.a.createElement(Q.a,{to:"/"},o.a.createElement(N.a,{className:e.menuButton,color:"inherit","aria-label":"Settings Menu"},o.a.createElement(de.a,null))),o.a.createElement(T.a,{variant:"h6",color:"inherit",className:e.grow},o.a.createElement("div",{className:"logo"},"Chindig")))),o.a.createElement("span",null),o.a.createElement(o.a.Fragment,null,o.a.createElement(we.a,null),o.a.createElement("div",{className:e.layout},o.a.createElement("main",null,o.a.createElement("div",{className:e.mainFeaturedPost},o.a.createElement("img",{className:e.mainImage,src:"./".concat(t.image),style:{width:"100%",height:500}}),o.a.createElement(Z.a,{container:!0},o.a.createElement(Z.a,{item:!0},o.a.createElement("div",{className:e.mainFeaturedPostContent},o.a.createElement(T.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0},t.name),o.a.createElement(T.a,{variant:"h5",color:"inherit",paragraph:!0},t.start," @ ",t.location))))),o.a.createElement(Z.a,{container:!0,spacing:40,className:e.mainGrid},o.a.createElement(Z.a,{item:!0,xs:12,md:8},o.a.createElement(T.a,{variant:"h6",gutterBottom:!0},"Detail"),o.a.createElement(ve.a,null),o.a.createElement("p",null,t.description),o.a.createElement(T.a,{variant:"h6",gutterBottom:!0},"Outer Link"),o.a.createElement(ve.a,null),o.a.createElement("p",null,o.a.createElement("a",{target:"_blank",href:t.url},t.url)),o.a.createElement(T.a,{variant:"h6",gutterBottom:!0},"Fee"),o.a.createElement(ve.a,null),o.a.createElement("p",null,"$",t.cost)),o.a.createElement(Z.a,{item:!0,xs:12,md:4},o.a.createElement(pe.a,{elevation:0,className:e.sidebarAboutBox},o.a.createElement(T.a,{variant:"h6",gutterBottom:!0},"About"),o.a.createElement(T.a,null,"Volumes Bookcafe is Wicker Park's new neighborhood independent bookstore cafe. With heavily curated shelves of books, and a tasty menu of baked goods, quality espresso drinks and an array of local beer and wine, we aim to create a warm and inviting community space for book lovers of all ages.")),o.a.createElement(T.a,{variant:"h6",gutterBottom:!0,className:e.sidebarSection},"Social"),o.a.createElement(T.a,null,o.a.createElement("a",{className:e.socialLink,target:"_blank",href:"https://www.facebook.com/volumesbooks/"},"Facebook")),o.a.createElement(T.a,null,o.a.createElement("a",{className:e.socialLink,target:"_blank",href:"https://twitter.com/volumesbooks?lang=en"},"Twitter")))))),o.a.createElement("footer",{className:e.footer},o.a.createElement(T.a,{variant:"h6",color:"inherit",className:e.grow},o.a.createElement("div",{className:"logo"},"Chindig"),o.a.createElement("div",{className:e.slogan},"Find your community")))))}}]),t}(o.a.Component),ke=Object(d.withStyles)(function(e){var t;return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},layout:(t={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(C.a)(t,e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),Object(C.a)(t,"marginTop",3*e.spacing.unit),t),toolbarMain:{borderBottom:"1px solid ".concat(e.palette.grey[300])},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between"},mainFeaturedPost:{marginBottom:1*e.spacing.unit,paddingBottom:0},mainFeaturedPostContent:Object(C.a)({padding:"".concat(2*e.spacing.unit,"px"),paddingLeft:0,paddingBottom:0},e.breakpoints.up("md"),{paddingRight:0}),mainGrid:{marginTop:1*e.spacing.unit},sidebarAboutBox:{padding:2*e.spacing.unit,backgroundColor:e.palette.grey[200]},sidebarSection:{marginTop:3*e.spacing.unit},footer:{backgroundColor:e.palette.primary.main,fontSize:25,color:e.palette.grey[50],marginTop:8*e.spacing.unit,padding:"".concat(6*e.spacing.unit,"px 0")},slogan:{textAlign:"center",fontSize:20,fontFamily:"Great Vibes"},mainImage:{borderRadius:5},socialLink:{color:"#424242",textDecoration:"none"}}})(Ee),Te=Object(d.createMuiTheme)({palette:{primary:{main:"#009bd1"},secondary:{light:"#0066ff",main:"#0044ff",contrastText:"#ffcc00"}},typography:{useNextVariants:!0}}),Ce=function(e){var t=e.component,a=e.props,n=Object(u.a)(e,["component","props"]);return o.a.createElement(g.a,Object.assign({},n,{render:function(e){return o.a.createElement(t,Object.assign({},a,e))}}))},Se=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={query:null},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement(d.MuiThemeProvider,{theme:Te},o.a.createElement(Ce,{exact:!0,path:"/",component:he}),o.a.createElement(Ce,{path:"/event/:id",component:ke}),o.a.createElement(Ce,{path:"/profile",component:he})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},95:function(e){e.exports=[{name:"Trivia  Night",description:"4 rounds.  Pop culture, current Events, Literary, and Picture Round.  Books for prizes",url:"https://www.volumesbooks.com/event/trivia-night-94",start:"2018-11-26T20:00:00",cost:"free",location:"Volumes Bookcafe",tag:"Trivia",image:"images/events-1/volumes.jpg"},{name:"Underground Art Market 2018",description:"Please join us for our 8th year, 10th edition of The Underground Art Market. This year we are creating this event at Salvage One. Salvage One is an incredible art, antique & artifact store and stunning event space. We couldn/'t be more thrilled to announce the all the incredible artists, artisans and culinary artists that are coming together on the themes of wellness & recycled arts & eco-consciousness to create this event.",url:"https://www.facebook.com/events/1672738502838298/",start:"2018-12-09T12:00:00",cost:"free",location:"Salvage One",tag:"Art",image:"images/events-2/underground_market_2018.jpg"},{name:"Thanksgiving: Listen to Them Grow",description:"In its 90th year at Rockefeller Chapel, the South Side\u2019s beloved interfaith Thanksgiving community celebration features the Hyde Park Neighborhood Choir of the Chicago\u2019s Children\u2019s Choir singing world music, with prayers and readings by local leaders of diverse spiritual traditions. Elizabeth Davenport, Dean of Rockefeller Chapel, offers the address. Free. Presented by the Hyde Park & Kenwood Interfaith Council with Rockefeller Chapel",url:"https://www.facebook.com/events/2148766835443615/",start:"2018-11-28T11:00:00",cost:"free",location:"Rockefeller Memorial Chapel",tag:"Music",image:"images/events-3/thanksgiving.jpg"},{name:"Chicago Open Stratego Tournament @ CHITAG",description:"Chicago CHITAG Open Stratego Tournament is open for all participants. Young and old, starters and experienced players, everyone will meet opponents of a sort of similar level. There will be fun, exciting games, and the chance to reach eternal fame. The Chicago Open is the ideal event to meet STRATEGO friends from all over the USA to enjoy the game.",url:"https://www.eventbrite.com/e/chicago-chitag-open-stratego-tournament-hosted-by-playmonster-nasf-tickets-50043304872",start:"2018-11-18T09:00:00",cost:"free",location:"Navy Pier",tag:"Game",image:"images/events-4/highres_475695184.jpg",past:!0},{name:"Green Gratitude 2018 Raw Vegan Dinner - ALL WELCOME!!",description:"This will be a fancy raw vegan potluck. We ask you to bring a dish using our recipes.\u2026 the Green Gratitude Chef Team will be plating this special meal for us. We will also need a few people to make a cash donation to help cover costs of some of the dishes the chefs will make.  Everyone Welcome!",url:"https://www.meetup.com/taste-of-vegan-chicagoland/events/255989196/",start:"2018-12-09T12:00:00",cost:"$5.00",location:"Immanuel Lutheran Church",tag:"Food",image:"images/events-5/600_476132574.jpeg"},{name:"Help sort donated food for Coppin Food Pantry, Southside, afternoon",description:"We will be sorting donated produce from local grocery stores to prepare for the distribution in the late afternoon at the Coppin Community Center/'s Food Pantry. Come help feed low income families in need of food in the Washington Park Neighborhood. The pantry is operated by the Coppin Memorial A.M.E. Church and Coppin Community Center. They have been serving the south side of Chicago for the last 95 years. The pantry has been operation since October 2011. Refreshments will be served to volunteers. We need help the most from 8:30 am to 1:30 pm on truck delivery. 1st truck arrives between 8:30-9:00. 2nd truck arrives between 12:00noon and 12:30. These are not hard and fast time slots. If you cannot stay for the full duration, you can still be very helpful for 1 or 2 hours. Average weight for the bags and boxes are around 20 to 40 pounds. We work in teams so you do not need to lift anything heavier than you feel comfortable doing. You can take breaks whenever you need one.",url:"https://www.meetup.com/Chicago-Fun-Volunteers/events/lbszclyxpbzb/",start:"2018-11-19T08:30:00",cost:"free",location:"Coppin Community Center",tag:"Volunteer",image:"images/events-6/strong-black-beautiful-woman-378x300.jpg"},{name:"Delicious Authentic Homecooked Venezuelan at SWEET PEPPER! 2nd seating!",description:"Sweet Pepper restaurant is a family-owned restaurant that has recently opened. They are located in the Northwest side of Chicago on Lawrence Ave in the Lincoln Square neighborhood. We will be having a delicious dinner at this restaurant and will be all vegan! They will be having a special appetizer for us, the rest is on their menu.",url:"https://www.meetup.com/taste-of-vegan-chicagoland/events/255971339/",start:"2018-11-12T19:00:00",cost:"$12.00",location:"Sweet Pepper",tag:"Food, Vegan",image:"images/events-7/highres_475921864.jpeg",past:!0},{name:"Sunday Night Sitting Meditation w/ North Suburban Meditation Community",description:"Join Mark Z and his Sangha -- almost every Sunday evening in this kind-hearted, committed fellowship, as we come together to support one another in practicing mindfulness meditation.  Some guidance is offered by the facilitator, followed by a period of sitting, breath awareness, thought witnessing and other meditation techniques.  Meditation is widely known to be supportive for mental clarity, emotional regulation and physical well-being. We support one another on this simple but profound path.  Modest donations are accepted at the discretion of the participants, to help support our host location, Inner Balance.",url:"https://www.meetup.com/Inner-Balance-Meditation/events/255870386/",start:"2018-11-18T18:30:00",cost:"free",location:"Inner Balance",tag:"Mind Grouth",image:"images/events-8/highres_472139772.jpeg"},{name:"Exploring Your Life Mission",description:"Why am I here?  What am I here to do?  Who am I here to become?  If these questions are relevant for you, Join us for the continuing series of Life Mission Sessions. Each Session is custom created for, and with, those in attendance. Join us for one to gain a morsel of insight. Join us monthly to continue to deepen inspiration, grow your voice, increase your confidence, courage and impact in the world.",url:"https://www.meetup.com/Inner-Balance-Meditation/events/255196824/",start:"2018-12-25T14:00:00",cost:"free",location:"Inner Balance",tag:"Mind Groth",image:"images/event-placeholder.png"},{name:"Cook a meal for the homeless, Streeterville/Gold Coast, flexible shift times.",description:"Join Fight2Feed as we help cook and feed 150+ meals for our neighbors that are homeless and families in need. This is a special Monday day time project with the Fourth Presbyterian Church and Catholic Charities. Volunteers will meet at the Fourth Presbyterian Church in the morning, located near Streeterville, 126 E Chestnut Street Chicago IL 60611. (across from John Hancock building). Volunteer shifts are from 10 AM to 4 PM in 3 hour blocks. If you have to leave early or come later than the listed shift time, that is OK too.",url:"https://www.meetup.com/Chicago-Fun-Volunteers/events/255049098/",start:"2018-11-19T10:00:00",cost:"free",location:"Fourth Presbyterian Church",tag:"Volunteer",image:"images/events-10/600_468470210.jpeg"},{name:"110 IN THE SHADE at BoHo Theatre",description:"Saddled to a failing cattle ranch, the only woman in a family of menfolk, Lizzie Curry has just about given up hope of finding love and escape. But when a charming trickster named Starbuck breezes into town promising to bring rain for $100.00, Lizzie\u2019s father gives the man the last of the family\u2019s savings, knowing that what he has to offer them, and Lizzie, is more than just rain. Taking our cue from the 2007 Broadway revival, BoHo looks to bring its customary small-scale intimacy to this underrated Depression-era tale. Adapted from Nash\u2019s hit play THE RAINMAKER by the composing team behind THE FANTASTICKS and I DO! I DO!, 110 IN THE SHADE is a story of recognizing the beauty and potential locked away inside all of us.  Running Time: 2 hours with intermission",url:"http://bohotheatre.com/shows/110-in-the-shade/",start:"2018-11-23T20:00:00",cost:"$35.00",location:"Theater Wit",tag:"Art",image:"images/events-11/110_in_the_shade-6.jpg"},{name:"Concert: The Garden, LE1F",description:"The Garden is an American duo from Orange County, California, formed in 2011 by twin brothers Wyatt and Fletcher Shears. The duo released their debut album The Life and Times of a Paperclip in 2013, with several smaller releases following.",url:"https://chicago.ohmyrockness.com/shows/331631-the-garden-le1f-cobra-lounge",start:"2018-11-23T18:30:00",cost:"$17.50",location:"Cobra Lounge",tag:"Music",image:"images/LE1F.png"},{name:"The Big Lebowski Screening",description:"After Jeff The Dude Lebowski has his rug desecrated (it really tied the room together), he discovers that he/'s been mistaken for a millionaire also named Jeff Lebowski, who then recruits him to deliver the ransom for his kidnapped trophy wife. Both a eulogy to idleness and a poke at mental insipidity, The Big Lebowski proceeds to unfurl an unforgettable array of personalities and misadventures, chock full of iconic scenes and memorable lines.",url:"http://docfilms.uchicago.edu/dev/calendar/specialevents.shtml",start:"2018-12-01T21:30:00",cost:"$5.00",location:"Ida Notes Theater",tag:"Film",image:"images/TheBigLebowski.png"},{name:"Every Manner of Humanity: Inside the Exhibition Break a Rule",description:"A bold innovator who enjoyed disrupting conventions, Chicago artist Ed Paschke (1939\u20132004) mentored students for over two and a half decades to think outside the box. Join Block Museum Fellow Beth Derderian, doctoral candidate in anthropology, for a discussion of Paschke/'s teaching and artistic practices during a tour of the exhibition Break A Rule: Ed Paschke\u2019s Art and Teaching.",url:"https://www.facebook.com/events/220843261936354/",start:"2018-12-01T18:00:00",cost:"free",location:"The Block Museum",tag:"Art",image:"images/BreakARule.png"},{name:"Visiting Artist Talk: Mike Cloud",description:"Mike Cloud is a painter whose work examines the conditions of painting in its contemporary life among countless reproductions, symbols and descriptions. Cloud earned his MFA from Yale University School of Art and a BFA from the University of Illinois-Chicago. ",url:"http://www.mikecloudart.com/",start:"2019-1-17T17:00:00",cost:"free",location:"Northwestern University, Kresge Hall",tag:"Art",image:"images/MikeCloud.png"},{name:"Sleigh",description:"Hot chocolate, apple cider, yummy snacks, and favorite carols by the fire pit played on the carillon by Joey Brink and senior members of the Rockefeller Carillon Studio. Dress for the outdoors! Free.",url:"https://rockefeller.uchicago.edu/",start:"2018-12-6T17:00:00",cost:"free",location:"Rockefeller Memorial Chapel",tag:"Music",image:"images/SleighBells.png"},{name:"Pub Trivia Night",description:"Trivia Night - Every\xa0Tuesday night at 8:30PM",url:"http://www.harryshydepark.com/events/",start:"2018-12-4T20:30:00",cost:"free",location:"Harry\u2019s Pub",tag:"Trivia",image:"images/HarrysPub.png"},{name:"Bite Size Broadway",description:"Ruth Lloyd Webber (no relation) has been struggling for thirty years to throw her hat in the actor\u2019s ring. Without a single acting credit to her infamous (no relation) name, Webber wrote eight mini musicals in the hopes of finally making her acting debut. None of them longer than 15 minutes, none of them shorter than 15 seconds. Six talented actors are bringing these comedic, inventive, never-before-seen productions to life in one spectacular hour of singing, dancing and jazz hands. ",url:"https://chicagoplays.com/show/annoyance-theatre/bite-size-broadway.html",start:"2018-12-13T20:00:00",cost:"free",location:"Annoyance Theatre",tag:"Theater",image:"images/o.jpg"},{name:"Arcadia",description:"Hailed as \u201cthe perfect marriage of ideas and high comedy\u201d (The Times), the plot of ARCADIA swings between the early 19th century and the present day to explore the relationship between order and chaos. Delightful, richly drawn characters from both time periods enter and exit the same room, and current trappings end up mixing with accouterments of the past. Mathematical theory, natural history, and Lord Byron all contribute to humanity\u2019s eternally amusing dance of love. Sparkling dialogue and clever plot twists remind us of our desire to find order in life\u2019s never-ending parade of seemingly random events",url:"https://chicagoplays.com/show/promethean-theatre-ensemble/arcadia.html",start:"2018-12-12T17:00:00",cost:"free",location:"Greenhouse Theater Center",tag:"Theater",image:"images/Arcadia.jpg"},{name:"Concert: Empress Of",description:"Empress Of is the solo musical project of Los Angeles-based, Latin American singer-songwriter, Lorely Rodriguez. She gained attention in 2012 for anonymously releasing a series of 1 minute-long demos prefaced only by a solid color entitled /'Colorminutes/'.",url:"http://www.empressof.com/",start:"2018-11-30T19:30:00",cost:"free",location:"House of Vans",tag:"Music",image:"images/EmpressOf.png"},{name:"Concert: Jamila Woods",description:"Jamila Woods is a Chicago-based American soul singer, songwriter and poet. Woods is a graduate of St. Ignatius College Prep and Brown University. She is widely known for her collaborative works with Chance the Rapper on the hit song /'Sunday Candy/' from the album Surf as well as /'Blessings/' from Coloring Book.",url:"http://www.jamila-woods.com/",start:"2018-11-30T19:00:00",cost:"$15.00",location:"Harold Washington Cultural Center",tag:"Music",image:"images/JamilaWoods.png"},{name:"Adults Night Out 2018",description:"Guests will enjoy unique animal chats, educational entertainment, and cash bars throughout the zoo at this after-hours event",url:"https://www.lpzoo.org/adults-night-out",start:"2018-11-29T18:30:00",cost:"$15.00",location:"Lincoln Park Zoo",tag:"Animal",image:"images/events/adult_zoo.jpg"},{name:"Happy's: A Holiday Pop-Up Bar",description:"This is a great pitstop after checking out Christkindlmarket or the Millennium Park ice-skating rink",url:"http://chicagoathleticevents.com/events/categories/",start:"2018-12-8T17:00:00",cost:"free",location:"Chicago Athletic Assocation",tag:"Bar",image:"images/events/happy.jpg"},{name:"Travis Scott + Sheck Wes + Trippie Redd + Gunna",description:"After celebrating the release of his latest album, ASTROWORLD, at Lollapalooza this summer, Travis Scott returns to Chicago on his WISH YOU WERE HERE tour.",url:"http://www.unitedcenter.com/events/2018/12/06/travis-scott-astroworld-wish-you-were-here/",start:"2018-12-6T19:30:00",cost:"$40.00-$450",location:"1901 W Madison St ",tag:"Music",image:"images/events/happy.jpg"},{name:"NATIONAL THEATRE LIVE PRESENTS ANTONY & CLEOPATRA",description:"Broadcast live from the National Theatre, Ralph Fiennes and Sophie Okonedo play Shakespeare\u2019s famous fated couple in his great tragedy of politics, passion and power",url:"http://ntlive.nationaltheatre.org.uk/productions/69873-antony-cleopatra",start:"2018-12-6T19:00:00",cost:"$18.00-$20.00",location:"AMC River East 21",tag:"Art",image:"images/events/nation.jpg"},{name:"CHICAGO BULLS V OKLAHOMA CITY THUNDER",description:"Watch the legendary Chicago Bulls hit the court to play the Oklahoma City Thunder in this regular season game ",url:"https://www.nba.com/bulls/gameday/20181121/phxchi",start:"2018-12-7T19:00:00",cost:"$100",location:"Chicago Bulls",tag:"Sport",image:"images/events/bull.jpg"},{name:"BROOKFIELD ZOO\u2019S BREAKFAST WITH SANTA",description:"You can visit your favorite animals",url:"https://www.czs.org/Brookfield-ZOO/Events/Upcoming-Events",start:"2018-12-16T10:00:00",cost:"$15.00",location:"Brookfield Zoo",tag:"Special",image:"images/events/santa.jpg"},{name:"Pride Film Festival",description:"Monthly film festival of short LGBTQ - themed films from around the world.",url:"http://www.pridefilmsandplays.com/",start:"2018-12-11T19:30:00",cost:"$10.00",location:"The Broadway, Pride Arts Center",tag:"Festivals",image:"images/events/pride.jpg"},{name:"ART ON THEMART",description:"In the spirit of Chicago\u2019s great legacy of public art and culture, Art on theMART is the largest digital art projection in the world",url:"https://www.artonthemart.com/",start:"2018-12-12T19:00:00",cost:"free",location:"Merchandise Mart",tag:"Museum",image:"images/events/museum.jpg"},{name:"CHICAGO'S ORIGINAL ARCHITECTURE TOUR",description:"This comprehensive tour will navigate through the heart of the city on all three branches of the Chicago River",url:"https://wendellaboats.com/Boat-Tours/Chicago-River-Architecture-Tour",start:"2018-12-12T9:00:00",cost:"$35.00",location:"Wendella Tours & Cruises",tag:"Tour",image:"images/events/tour.jpg"},{name:"Dream Freaks Fall From Space",description:"You\u2019ll fall for this other-worldly adventure that\u2019s unlike any other show on the planet!",url:"https://www.secondcity.com/shows/chicago/dream-freaks-fall-space/",start:"2018-12-12T20:00:00",cost:"$38.00",location:"The Second City",tag:"Music",image:"images/events/dream.jpg"}]}},[[105,2,1]]]);
//# sourceMappingURL=main.56007b48.chunk.js.map