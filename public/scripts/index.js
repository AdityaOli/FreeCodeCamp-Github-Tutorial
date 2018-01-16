$(function() {
  $("#console-description-container").height($(".sidenav").height());
  $("#folderStructure").height($(".sidenav").height());
  $("#descriptionText").height($("#console-description-container").height() / 3);
  $("#remoteRepo").height($("#folderStructure").height());
  $("#localRepo").height($("#folderStructure").height());
  $("#gitConsole").height($(".slide").height());

  $.ajax({
    url:
      "https://api.github.com/repos/AdityaOli/Execute-untrusted-code-online-using-the-hackerrank-API/git/trees/master?recursive=1",
    cache: false,
    dataType: "json",
      success: function (data) {
            $("#remoteRepo").append("<ul class='file-tree'>");
            for (let i = 0; i < data.tree.length; i++)
            {
                $("#remoteRepo").append(data.tree[i].path + "<br/>");
                var pathList = data.tree[i].path.split("/");
                if(pathList[0])



                $("#remoteRepo").append(pathList + "<br/>");
            }
            $("#remoteRepo").append("</ul>");      
    },
    error: function(e, xhr) {
      console.log("Oops! Error");
    }
  });

  $.ajax({
    url:
      "https://api.github.com/repos/AdityaOli/Execute-untrusted-code-online-using-the-hackerrank-API/git/trees/master?recursive=1",
    cache: false,
    dataType: "json",
    success: function(data) {
      for (let i = 0; i < data.tree.length; i++) {
        $("#localRepo").append(data.tree[i].path + "<br/>");
      }
    },
    error: function(e, xhr) {
      console.log("Oops! Error");
    }
  });

  $.ajax({
    url: "/profile/roadMap",
    cache: false,
    dataType: "json",
    success: function(data) {
      for (let i = 0; i < data.length; i++) {
        $("#sidePopNavBar").append(
          i + ".<a href='#'>" + data[i].Command + "</a><br/>"
        );
      }
    },
    error: function(e, xhr) {
      console.log("Oops! Error. I  guess you're not logged In.");
    }
  });

  /*
    Code for the console pop-up button
*/
  $(".footer").click(function() {
    $(".slide").slideToggle("slow");
  });
});

/*
    Code for the Navigation button
*/
function openNav() {
  document.getElementById("sidePopNavBar").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidePopNavBar").style.width = "0";
}
