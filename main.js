/*
    ** News API's **
    * https://rapidapi.com/blog/rapidapi-featured-news-apis/?utm_source=google&utm_medium=cpc&utm_campaign=Beta&utm_term=%2Bnews%20%2Bapis_b&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6LVnwiekFtP1dO6Y2IClM8NizQ36wSSAMTjILv452dlrrGKEbFSiL0aAgoyEALw_wcB
    * https://datanews.io/
    * https://developer.nbcuniversal.com/docs/read/Getting_Started
    * https://nbcinnovations.com/api/
    * https://bis.lexisnexis.com/news-api?utm_source=google&utm_medium=cpc&utm_term=news%20api&utm_campaign=NB-M-NEX-US-MI-PPC-MetabaseAggregator-PHR-2020&utm_content=News%20APIs&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6IQtSZLOmSqwMOCsqi-KB9Ah-P16QWK8UMzcCE2BTVgrWdQSv2QYFgaArQxEALw_wcB
    * https://webhose.io/topics/news-api-2/?utm_medium=CPC&utm_source=Google&utm_campaign=1200520_WD-Research-news-usa&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6JB3yo3PxGTaDD-lNXC_3uNLmjEDnOj3eRpZBU7CGwwRX0KEQlqA78aAhMFEALw_wcB
    * 
*/



/* Unsplash Fetch API */
// Single image url ex. - https://api.unsplash.com/photos/WkfDrhxDMC8?client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k
// full URL -  https://api.unsplash.com/photos/random/?query=developer&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k
window.addEventListener('load', loadImg);
function loadImg() {
    const url = "https://api.unsplash.com/photos/FPNnKfjcbNU?client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k";
    const imageDiv = document.querySelector('.main-banner-image');
    let listOfIDs = []
    fetch(url).then(response => {
        return response.json();
    })
    .then(data => {
        // Fetch only image that you want by using id. Example : https://unsplash.com/photos/6VhPY27jdps, id = '6VhPY27jdps'   
        let imageElement = document.createElement('img')
        imageElement.src = data.urls.thumb
        imageDiv.appendChild(imageElement)
    })
}