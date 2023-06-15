
        // Hiển thị danh sách tên album 2
        function togglelistAlbum_name2() {
          var listAlbum_name2 = document.getElementById("listAlbum_name2");
          listAlbum_name2.style.display = (listAlbum_name2.style.display === "none") ? "block" : "none";
        }
  
    
        //Hiển thị danh sách ảnh
        function toggleAlbum(albumId) {
        var Album = document.getElementsByClassName("listImages");
        for (var i = 0; i < Album.length; i++) {
            Album[i].style.display = "none";
        }
        var selectedAlbum = document.getElementById(albumId);
        selectedAlbum.style.display = "block";
        }

        
        // JavaScript để phóng to ảnh khi được chọn và thu nhỏ các ảnh còn lại
        function zoomImage(image) {
            var thumbnails = document.getElementsByClassName('listImages_item');
            
            for (var i = 0; i < thumbnails.length; i++) {
                if (thumbnails[i] === image) {
                    if (image.style.width === '330px' && image.style.height === 'auto') {
                        image.style.width = '160px';
                        image.style.height = '160px';
                    } else {
                        image.style.width = '330px';
                        image.style.height = 'auto';
                    }
                } else {
                    thumbnails[i].style.width = '160px';
                    thumbnails[i].style.height = '160px';
                }
            }
        }
