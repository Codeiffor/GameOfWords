var easy=document.querySelector("#easy");
var medium=document.querySelector("#medium");
var hard=document.querySelector("#hard");
var score=document.querySelector("#score");
var word=document.querySelector("#word");
var answer=document.querySelector("#answer");

var array;
var easyArray=["able","acid","aged","also","area","army","away","baby","back","ball","band","bank","base","bath","bear","beat","been","beer","bell","belt","best","bill","bird","blow","blue","boat","body","bomb","bond","bone","book","boom","born","boss","both","bowl","bulk","burn","bush","busy","call","calm","came","camp","card","care","case","cash","cast","cell","chat","chip","city","club","coal","coat","code","cold","come","cook","cool","cope","copy","CORE","cost","crew","crop","dark","data","date","dawn","days","dead","deal","dean","dear","debt","deep","deny","desk","dial","dick","diet","disc","disk","does","done","door","dose","down","draw","drew","drop","drug","dual","duke","dust","duty","each","earn","ease","east","easy","edge","else","even","ever","evil","exit","face","fact","fail","fair","fall","farm","fast","fate","fear","feed","feel","feet","fell","felt","file","fill","film","find","fine","fire","firm","fish","five","flat","flow","food","foot","ford","form","fort","four","free","from","fuel","full","fund","gain","game","gate","gave","gear","gene","gift","girl","give","glad","goal","goes","gold","Golf","gone","good","gray","grew","grey","grow","gulf","hair","half","hall","hand","hang","hard","harm","hate","have","head","hear","heat","held","hell","help","here","hero","high","hill","hire","hold","hole","holy","home","hope","host","hour","huge","hung","hunt","hurt","idea","inch","into","iron","item","jack","jane","jean","john","join","jump","jury","just","keen","keep","kent","kept","kick","kill","kind","king","knee","knew","know","lack","lady","laid","lake","land","lane","last","late","lead","left","less","life","lift","like","line","link","list","live","load","loan","lock","logo","long","look","lord","lose","loss","lost","love","luck","made","mail","main","make","male","many","Mark","mass","matt","meal","mean","meat","meet","menu","mere","mike","mile","milk","mill","mind","mine","miss","mode","mood","moon","more","most","move","much","must","name","navy","near","neck","need","news","next","nice","nick","nine","none","nose","note","okay","once","only","onto","open","oral","over","pace","pack","page","paid","pain","pair","palm","park","part","pass","past","path","peak","pick","pink","pipe","plan","play","plot","plug","plus","poll","pool","poor","port","post","pull","pure","push","race","rail","rain","rank","rare","rate","read","real","rear","rely","rent","rest","rice","rich","ride","ring","rise","risk","road","rock","role","roll","roof","room","root","rose","rule","rush","ruth","safe","said","sake","sale","salt","same","sand","save","seat","seed","seek","seem","seen","self","sell","send","sent","sept","ship","shop","shot","show","shut","sick","side","sign","site","size","skin","slip","slow","snow","soft","soil","sold","sole","some","song","soon","sort","soul","spot","star","stay","step","stop","such","suit","sure","take","tale","talk","tall","tank","tape","task","team","tech","tell","tend","term","test","text","than","that","them","then","they","thin","this","thus","till","time","tiny","told","toll","tone","tony","took","tool","tour","town","tree","trip","true","tune","turn","twin","type","unit","upon","used","user","vary","vast","very","vice","view","vote","wage","wait","wake","walk","wall","want","ward","warm","wash","wave","ways","weak","wear","week","well","went","were","west","what","when","whom","wide","wife","wild","will","wind","wine","wing","wire","wise","wish","with","wood","word","wore","work","yard","yeah","year","your","zero","zone"];
var mediumArray=["about","above","abuse","actor","acute","admit","adopt","adult","after","again","agent","agree","ahead","alarm","album","alert","alike","alive","allow","alone","along","alter","among","anger","Angle","angry","apart","apple","apply","arena","argue","arise","array","aside","asset","audio","audit","avoid","award","aware","badly","baker","bases","basic","basis","beach","began","begin","begun","being","below","bench","billy","birth","black","blame","blind","block","blood","board","boost","booth","bound","brain","brand","bread","break","breed","brief","bring","broad","broke","brown","build","built","buyer","cable","calif","carry","catch","cause","chain","chair","chart","chase","cheap","check","chest","chief","child","china","chose","civil","claim","class","clean","clear","click","clock","close","coach","coast","could","count","court","cover","craft","crash","cream","crime","cross","crowd","crown","curve","cycle","daily","dance","dated","dealt","death","debut","delay","depth","doing","doubt","dozen","draft","drama","drawn","dream","dress","drill","drink","drive","drove","dying","eager","early","earth","eight","elite","empty","enemy","enjoy","enter","entry","equal","error","event","every","exact","exist","extra","faith","false","fault","fiber","field","fifth","fifty","fight","final","first","fixed","flash","fleet","floor","fluid","focus","force","forth","forty","forum","found","frame","frank","fraud","fresh","front","fruit","fully","funny","giant","given","glass","globe","going","grace","grade","grand","grant","grass","great","green","gross","group","grown","guard","guess","guest","guide","happy","harry","heart","heavy","hence","henry","horse","hotel","house","human","ideal","image","index","inner","input","issue","japan","jimmy","joint","jones","judge","known","label","large","laser","later","laugh","layer","learn","lease","least","leave","legal","level","lewis","light","limit","links","lives","local","logic","loose","lower","lucky","lunch","lying","magic","major","maker","march","maria","match","maybe","mayor","meant","media","metal","might","minor","minus","mixed","model","money","month","moral","motor","mount","mouse","mouth","movie","music","needs","never","newly","night","noise","north","noted","novel","nurse","occur","ocean","offer","often","order","other","ought","paint","panel","paper","party","peace","peter","phase","phone","photo","piece","pilot","pitch","place","plain","plane","plant","plate","point","pound","power","press","price","pride","prime","print","prior","prize","proof","proud","prove","queen","quick","quiet","quite","radio","raise","range","rapid","ratio","reach","ready","refer","right","rival","river","robin","roger","roman","rough","round","route","royal","rural","scale","scene","scope","score","sense","serve","seven","shall","shape","share","sharp","sheet","shelf","shell","shift","shirt","shock","shoot","short","shown","sight","since","sixth","sixty","sized","skill","sleep","slide","small","smart","smile","smith","smoke","solid","solve","sorry","sound","south","space","spare","speak","speed","spend","spent","split","spoke","sport","staff","stage","stake","stand","start","state","steam","steel","stick","still","stock","stone","stood","store","storm","story","strip","stuck","study","stuff","style","sugar","suite","super","sweet","table","taken","taste","taxes","teach","teeth","terry","texas","thank","theft","their","theme","there","these","thick","thing","think","third","those","three","threw","throw","tight","times","tired","title","today","topic","total","touch","tough","tower","track","trade","train","treat","trend","trial","tried","tries","truck","truly","trust","truth","twice","under","undue","union","unity","until","upper","upset","urban","usage","usual","valid","value","video","virus","visit","vital","voice","waste","watch","water","wheel","where","which","while","white","whole","whose","woman","women","world","worry","worse","worst","worth","would","wound","write","wrong","wrote","yield","young","youth"];
var hardArray=["abroad","accept","access","across","acting","action","active","actual","advice","advise","affect","afford","afraid","agency","agenda","almost","always","amount","animal","annual","answer","anyone","anyway","appeal","appear","around","arrive","artist","aspect","assess","assist","assume","attack","attend","august","author","avenue","backed","barely","battle","beauty","became","become","before","behalf","behind","belief","belong","berlin","better","beyond","bishop","border","bottle","bottom","bought","branch","breath","bridge","bright","broken","budget","burden","bureau","button","camera","cancer","cannot","carbon","career","castle","casual","caught","center","centre","chance","change","charge","choice","choose","chosen","church","circle","client","closed","closer","coffee","column","combat","coming","common","comply","copper","corner","costly","county","couple","course","covers","create","credit","crisis","custom","damage","danger","dealer","debate","decade","decide","defeat","defend","define","degree","demand","depend","deputy","desert","design","desire","detail","detect","device","differ","dinner","direct","doctor","dollar","domain","double","driven","driver","during","easily","eating","editor","effect","effort","eighth","either","eleven","emerge","empire","employ","enable","ending","energy","engage","engine","enough","ensure","entire","entity","equity","escape","estate","ethnic","exceed","except","excess","expand","expect","expert","export","extend","extent","fabric","facing","factor","failed","fairly","fallen","family","famous","father","fellow","female","figure","filing","finger","finish","fiscal","flight","flying","follow","forced","forest","forget","formal","format","former","foster","fought","fourth","French","friend","future","garden","gather","gender","german","global","golden","ground","growth","guilty","handed","handle","happen","hardly","headed","health","height","hidden","holder","honest","impact","import","income","indeed","injury","inside","intend","intent","invest","island","itself","jersey","joseph","junior","killed","labour","latest","latter","launch","lawyer","leader","league","leaves","legacy","length","lesson","letter","lights","likely","linked","liquid","listen","little","living","losing","lucent","luxury","mainly","making","manage","manner","manual","margin","marine","marked","market","martin","master","matter","mature","medium","member","memory","mental","merely","merger","method","middle","miller","mining","minute","mirror","mobile","modern","modest","module","moment","morris","mostly","mother","motion","moving","murder","museum","mutual","myself","narrow","nation","native","nature","nearby","nearly","nights","nobody","normal","notice","notion","number","object","obtain","office","offset","online","option","orange","origin","output","oxford","packed","palace","parent","partly","patent","people","period","permit","person","phrase","picked","planet","player","please","plenty","pocket","police","policy","prefer","pretty","prince","prison","profit","proper","proven","public","pursue","raised","random","rarely","rather","rating","reader","really","reason","recall","recent","record","reduce","reform","regard","regime","region","relate","relief","remain","remote","remove","repair","repeat","replay","report","rescue","resort","result","retail","retain","return","reveal","review","reward","riding","rising","robust","ruling","safety","salary","sample","saving","saying","scheme","school","screen","search","season","second","secret","sector","secure","seeing","select","seller","senior","series","server","settle","severe","sexual","should","signal","signed","silent","silver","simple","simply","single","sister","slight","smooth","social","solely","sought","source","soviet","speech","spirit","spoken","spread","spring","square","stable","status","steady","stolen","strain","stream","street","stress","strict","strike","string","strong","struck","studio","submit","sudden","suffer","summer","summit","supply","surely","survey","switch","symbol","system","taking","talent","target","taught","tenant","tender","tennis","thanks","theory","thirty","though","threat","thrown","ticket","timely","timing","tissue","toward","travel","treaty","trying","twelve","twenty","unable","unique","united","unless","unlike","update","useful","valley","varied","vendor","versus","victim","vision","visual","volume","walker","wealth","weekly","weight","wholly","window","winner","winter","within","wonder","worker","wright","writer","yellow"];

var interval1;
var interval2;

easy.addEventListener("click",easy_mode);
medium.addEventListener("click",medium_mode);
hard.addEventListener("click",hard_mode);

word.innerHTML="select difficulty";


function easy_mode(event){
  clearInterval(interval1);
  clearInterval(interval2);
  medium.classList.toggle('active',false);
  hard.classList.toggle('active',false);
  easy.classList.toggle('active',true);
  answer.select();
  array=easyArray;
  answer.value="";
  countdown();
}
function medium_mode(event){
  clearInterval(interval1);
  clearInterval(interval2);
  easy.classList.toggle('active',false);
  hard.classList.toggle('active',false);
  medium.classList.toggle('active',true);
  answer.select();
  array=mediumArray;
  answer.value="";
  countdown();
}
function hard_mode(event){
  clearInterval(interval1);
  clearInterval(interval2);
  easy.classList.toggle('active',false);
  medium.classList.toggle('active',false);
  hard.classList.toggle('active',true);
  answer.select();
  array=hardArray;
  answer.value="";
  countdown();
}

function countdown(){
  var i=2;
  word.innerHTML=3;
  interval1=setInterval(count,1000);
  function count(){
    word.innerHTML=i;
    i-=1;
    if(i<0){
      clearInterval(interval1);
      gameStart();
      return;
    }
    return;
  }
}

function gameStart(){
  word.innerHTML=array[Math.floor((Math.random()*array.length))];
  interval2=setInterval(count,2500);
  function count(){
    if(answer.value!=word.innerHTML){
      clearInterval(interval2);
      gameEnd();
      return;
    }
    word.innerHTML=array[Math.floor((Math.random()*array.length))];
    answer.value="";
  }
}
function gameEnd(){
  word.innerHTML="Try again"
  answer.value="";
}