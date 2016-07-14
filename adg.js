
ADG = {};
ADG.API = {
	invoke : function (data) {
		alert("Adg invoked");
		console.log(data);
	}
};

if (window.addEventListener) {
	window.addEventListener("message", function () {
		ADG.API.invoke(event.data);
	}, false);
}


evt:aul
tpc:adg
dn:cunlock.localhost.com
url:cunlock.localhost.com/demo/demo_adg.html
br:Chrome
dv:desktop
bv:50
pvid:BF4EE564-FA90-4DD4-B249-9C589770D37D
ssid:3B9A86F6-626A-4201-923D-60B72472C427
uid:54759DD0-8F9D-477A-BC39-9DC24BDE83F7
suid:A4059061-30F4-44F0-BB13-146C08B141DD
ssd:1
os:Mac OS X
lang:en-US
rf:direct
ru:true
ssrf:direct
ts:1462393456290
sts:782
aud:110981|68234|67954|101729|40352|54587|68099|




bolt.adg.router.shuffle.grouping.by=bolt.adg.lineplainprocess 
bolt.adg.router.pageview.events.filter.list=dtl
bolt.adg.router.pageview.attributes.filter.list=pvid
bolt.adg.router.user.events.filter.list=aul



[kafka.spout.maxOffsetBehind=60000000 , bolt.adg.router.shuffle.grouping.by=bolt.adg.lineplainprocess , storm.message.timeout.secs=60 , bolt.adg.pageview.shuffle.grouping.by=bolt.adg.router, bolt.adg.router.pageview.events.filter.list=dtl, bolt.adg.lineplainprocess.enable=true, bolt.adg.ads.shuffle.grouping.by=bolt.adg.router, kafka.spout.number.parallelism=8 , bolt.adg.lineplainprocess.shuffle.grouping.by=kafka-spout-id_adg-pixels-dev, bolt.adg.user.shuffle.grouping.stream=userStream, bolt.adg.pageview.shuffle.grouping.stream=pageViewStream, kafka.spout.mock=false, bolt.adg.router.number.parallelism=24 , storm.top.exe.rx.buffersize=16384 , storm.top.rx.buffersize=8 , bolt.adg.pageview.enable=true, kafka.spout.topic=adg-pixels-qa, bolt.adg.user.rotate.map.bucket=3, bolt.adg.user.tick.tuple.freq.secs=300, bolt.adg.router.user.events.filter.list=aul, kafka.bolt.metadata.broker.list=localhost:9092, storm.top.sleep.wait.ms=50 , kafka.spout.scheme=com.dap.stream.pixel.kafka.scheme.LinePlainProcessScheme, bolt.adg.kafkaout.enable=true , bolt.adg.ads.enable=true , storm.mock=false, bolt.adg.pageview.producer.topic=pageview, kafka.bolt.request.required.acks=1, kafka.spout.port=2181 , bolt.adg.pageview.field.tick.tuple.frequency=30, bolt.adg.router.pageview.attributes.filter.list=pvid, bolt.adg.pageview.number.parallelism=24 , storm.workers=8 , kafka.spout.fetchSizeBytes=1048576 , kafka.spout.bufferSizeBytes=2097152 , bolt.adg.pageview.producer.number.parellism=1, kafka.spout.path=/streamPixel , bolt.adg.user.producer.number.parellism=1, bolt.adg.user.enable=true, storm.top.tx.buffersize=32 , storm.topology.name=stream-pixel-aggregation, storm.top.exe.tx.buffersize=16384 , kafka.bolt.serializer.class=kafka.serializer.StringEncoder, storm.max.task.parallelism=16 , bolt.adg.user.producer.topic=user, bolt.adg.user.shuffle.grouping.by=bolt.adg.router, bolt.adg.pageview.rotate.map.bucket=3, bolt.adg.router.enable=true, kafka.spout.earliestTime=false, bolt.adg.ads.number.parallelism=24 , bolt.adg.lineplainprocess.number.parallelism=24, bolt.adg.kafkaout.number.parallelism=24 , kafka.spout.socketTimeoutMs=10000 , kafka.spout.host=hadoop.qa.master.01.bzgint.com , storm.forceFromStart=false, storm.max.spout.pending=100 , bolt.adg.user.number.parallelism=24 , kafka.spout.id=kafka-spout-id_adg-pixels-dev , bolt.adg.kafkaout.shuffle.grouping.by=kafka-spout-id_adg-pixels-dev, bolt.adg.pageview.field.grouping.field=pvid]


5fede387
45ae199c
//Constructor
Router Bolt Config Reader: com.dap.stream.pixel.utils.ConfigReader@4132b71e
Router Bolt prepare Config Reader: com.dap.stream.pixel.utils.ConfigReader@69c54bfb
Router Bolt Config Reader Execute: com.dap.stream.pixel.utils.ConfigReader@69c54bfb

[ERROR] Pageview Received tuple: source: bolt.adg.router:4, stream: pageViewStream, id: {}, [{uid=Depeek_test_11, dv=Depeek_test_11, ssd=15, pgid=579423, mskt=15, iid=Depeek_test_11, moa=true, bv=Depeek_test_11, rf=Depeek_test_11, campid=Depeek_test_11, aid=Depeek_test_11, br=Depeek_test_11, lang=Depeek_test_11, 20=1464804731249, suid=Depeek_test_11, ssid=Depeek_test_11, vd=20, adx=Depeek_test_11, tsx=1464804731249, dn=Depeek_test_11, sid=579423, pvid=PVIDDepeek_test_12, crid=Depeek_test_11, bnid=Depeek_test_11, pid=Depeek_test_11, csco=1, skt=15, url=URLDepeek_test_1.com, pd=20, pe=true, sket=15, ap=true, evt=afq, plid=4, inid=Depeek_test_11, fvr=Depeek_test_11, pbsco=0.9658}, PVIDDepeek_test_12]
2016-06-01 18:12:33.784 c.d.s.p.b.PageViewBolt [ERROR]

{
	uid = redesign_test_1test, ssd = 15, tl = 1464805635532, ucr = 1464805637604, afq = 1464805636770, mskt = 15, iid = redesign_test_1test, uil = 1464805635843, bv = redesign_test_1test, br = redesign_test_1test, avs = 1464805636710, cla = 1464805636554, psc = 1464805637214, dtl = 1464805635470, suid = redesign_test_1test, ssid = redesign_test_1test, sk = 1464805636091, pvid = PVIDredesign_test_11, ctp = 1464805636037, arr = 1464805635407, bnid = redesign_test_1test, csco = 1, skt = 15, pck = 1464805637410, url = URLredesign_test_1.com, si = 1464805637138, pd = 20, pe = true, eas = 1464805637793, eap = 1464805637725, plid = 4, inid = redesign_test_1test, asq = 1464805636830, asp = 1464805636951, pbsco = 0.9658, skd = 1464805636155, ske = 1464805636216, hop = 1464805635967, clck = 1464805636495, dv = redesign_test_1test, pgid = 579423, moa = true, nar = 1464805635651, fva = 1464805635592, rf = redesign_test_1test, campid = redesign_test_1test, aid = redesign_test_1test, lang = redesign_test_1test, ic = 1464805635340, mc = 1464805637553, atq = 1464805636898, adx = redesign_test_1test, vd = 20, tsx = 1464805637856, dn = redesign_test_1test, sid = 579423, crid = redesign_test_1test, alf = 1464805635797, as = 1464805636643, ar = 1464805635265, pid = redesign_test_1test, fb = 1464805637856, aul = 1464805637665, al = 1464805635735, sket = 15, ap = true, evt = fb, ac = 1464805637016, ud = 1464805636425, fvr = redesign_test_1test, uc = 1464805637073, ab = 1464805636293, act = 1464805636362, x = 1464805637331, ps = 1464805635911
}
2016-06-01 18:30:24.886 c.d.s.p.b.PageViewBolt [ERROR] 



dtl,tl,fva,aop,ar,ic,arr,nar,al,alf,uil,uilf,ps,hop,ctp,sk,skd,ske,ab,act,ud,clck,cla,as,avs,afq,asq,atq,asp,ac,uc,si,psc,x,pck,mc,fc,pd,ucr,aul,eap,eas,fb,gl,aop





2016-06-01 21:53:08.985 c.d.s.p.b.h.i.UserRouteHelperImpl [ERROR] Params Map: {uid=AUL_test_2test5, ssd=15, dv=AUL_test_2test, pgid=579423, moa=true, iid=AUL_test_2test, mskt=15, ssrf=AUL_test_2test, bv=AUL_test_2test, campid=AUL_test_2test, rf=AUL_test_2test, aid=AUL_test_2test, br=AUL_test_2test, lang=AUL_test_2test, pub_id=AUL_test_2test, suid=AUL_test_2test6, ssid=AUL_test_2test, vd=20, adx=AUL_test_2test, tsx=1464817966443, dn=AUL_test_2test, sid=579423, os=AUL_test_2test, pvid=PVIDAUL_test_24, crid=AUL_test_2test, bnid=AUL_test_2test, site_id=data, csco=1, pid=AUL_test_2test, skt=15, url=URLAUL_test_2.com, tpc=adg, pd=20, pe=true, sket=15, ap=true, plid=4, evt=aul, aud=31389|67932|27355|102051|54587|68244|68234|135234|68198|40353|40352|18328|27525|68021|68098|26730|81804|105945|134329|101729|36520|81064|105934|28308|67952|68920|68239|111041|37122|68092|40351|72849|103908|47129|68184|93131|136314|20722|42803|110981|67954|45942|81805|40325|48545, inid=AUL_test_2test, fvr=AUL_test_2test, pbsco=0.9658, ru=true}
2016-06-01 21:53:08.985 c.d.s.p.b.h.i.UserRouteHelperImpl [ERROR] Attrs Map: {bolt.adg.router.bv=bv, bolt.adg.router.br=br, bolt.adg.router.dv=dv, bolt.adg.router.tsx=tsx, bolt.adg.router.cit=cit, bolt.adg.router.reg=reg, bolt.adg.router.cty=cty, bolt.adg.router.OS=OS, bolt.adg.router.ru=ru, bolt.adg.router.lang=lang, bolt.adg.router.uid=uid, bolt.adg.router.aud=aud, bolt.adg.router.dn=dn}

[1, {uid=TEST_UID, pvid=TEST_PVID, dtl=TEST_TSX, psc=TEST_TSX, evt=psc, ssid=TEST_SSID, tsx=TEST_TSX}, {uid=TEST_UID, pvid=TEST_PVID, dtl=TEST_TSX, psc=TEST_TSX, evt=psc, ssid=TEST_SSID, tsx=TEST_TSX}]
[1, {uid=TEST_UID, pvid=TEST_PVID, psc=TEST_TSX, dtl=TEST_TSX, evt=psc, ssid=TEST_SSID, tsx=TEST_TSX}, {uid=TEST_UID, pvid=TEST_PVID, psc=TEST_TSX, dtl=TEST_TSX, evt=psc, ssid=TEST_SSID, tsx=TEST_TSX}]


ECT196153198IN





2016-06-10 15:46:59.077 c.d.s.p.b.PageViewBolt [ERROR] PageView Received: {uid=Redegin_Stage_test_pipeline_11, ssd=15, ts=123456789, afr=inneradloadfailure, fv=Redegin_Stage_test_pipeline_1test, mskt=15, iid=Redegin_Stage_test_pipeline_1test, ssrf=Redegin_Stage_test_pipeline_1test, bv=Redegin_Stage_test_pipeline_1test, br=Redegin_Stage_test_pipeline_1test, tsop=15, suid=Redegin_Stage_test_pipeline_1test, cty=USA, ssid=Redegin_Stage_test_pipeline_1test, advid=advid123, os=Redegin_Stage_test_pipeline_1test, pvid=PVIDRedegin_Stage_test_pipeline_11, arr=1465573601690, bnid=Redegin_Stage_test_pipeline_1test, sc=15, csco=1, skt=15, url=URLRedegin_Stage_test_pipeline_1.com, alen=15, pd=20, pe=true, lg=Redegin_Stage_test_pipeline_1test, sts=Redegin_Stage_test_pipeline_1test, plid=4, pl=15, inid=Redegin_Stage_test_pipeline_1test, ska=true, ru=true, pbsco=0.9658, seqid=2, dv=Redegin_Stage_test_pipeline_1test, pgid=579423, moa=true, aid=Redegin_Stage_test_pipeline_1test, rf=Redegin_Stage_test_pipeline_1test, campid=Redegin_Stage_test_pipeline_1test, imid=12345, lang=Redegin_Stage_test_pipeline_1test, mode=vedio, adx=Redegin_Stage_test_pipeline_1test, vd=20, tsx=1465573601690, cit=Newyork, dn=Redegin_Stage_test_pipeline_1test, msd=20.1, lat=Redegin_Stage_test_pipeline_1test, sid=579423, plwt=15, ttf=19.1, crid=Redegin_Stage_test_pipeline_1test, ms=unmute, pid=Redegin_Stage_test_pipeline_1test, ttl=15.1, ip=10.10.10.111, sket=15, ap=true, reg=east, evt=arr, aud=31389|67932|27355|102051, siid=1234, fvr=Redegin_Stage_test_pipeline_1test, nas=true, atsop=15}


esProperties.put("elastic.search.host", config.getString("es.host", "localhost"));
    esProperties.put("elastic.search.port", config.getString("es.port", "9300"));
    esProperties.put("elastic.search.cluster.name", config.getString("es.cluster.name", "elasticsearch"));
    esProperties.put("elastic.search.local.mode", config.getString("es.local.mode", "false"));
    esProperties.put("client.transport.ping_timeout", config.getString("client.transport.ping_timeout", "10000"));
    esProperties.put("es.http.retries", config.getString("es.http.retries", "10"));
    esProperties.put("es.indexname", config.getString("es.indexname", "nasa"));
    esProperties.put("es.type", config.getString("es.type", "nasa"));




