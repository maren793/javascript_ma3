//Console.log out elements in JSON file
 data = '{
	"video": [
        { "id": 12312412312,
		  "name": "Ecuaciones Diferenciales",
		  "url": "/video/math/edo/12312412312",
		  "author": {
			"data": [
                {   "name_author": "Alejandro Morales",
                    "url": "/author/alejandro-morales",
				    "type": "master"
			}]
		}
	}]
}'

(function() {
    var info = JSON.parse(data);
    
    for (var i = 0; i <= info.video.length; i++) {
        for (key in info.video[i]) {
           
        }
    }
})();
