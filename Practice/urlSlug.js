function urlSlug(title) {
    title = title.toLowerCase();
    console.log(title);
    return title.split(/\W/).filter(item => { return item !== ""}).join("-");
}
urlSlug("Prasad Got Chill");