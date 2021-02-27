let org=new URL(document.URL);
let dst;

if (org.searchParams.has('list')) {
    dst=new URL("https://youtube.com/embed");
    dst.searchParams.append('list',org.searchParams.get('list'));
    if (org.searchParams.has('index')) {
        dst.searchParams.append('index',org.searchParams.get('index'));
    }
} else {
    dst=new URL("https://youtube.com/embed/"+org.searchParams.get('v'));
    if (org.searchParams.has('t')) {
        dst.searchParams.append('start',org.searchParams.get('t'));
    }
}

dst.searchParams.append('autoplay','1');
dst.searchParams.append('modestbranding','1');
dst.searchParams.append('rel','0');

if (!org.searchParams.getAll('feature').includes("emb_err_woyt")) {
    window.open(dst,"_self");
}