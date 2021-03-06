// django user object
const django_user = {
  "id": 11
};

// location object
const havana_cuba = {
  "id" : 11,
  "city" : "Havana",
  "state" : "",
  "country": "Cuba",
  "label": "Havana, Cuba",
  "lat": 23.1136,
  "lon": -82.3666
}

const new_york = {
  "city" : "New York",
  "state" : "New York",
  "country": "USA",
  "label": "New York, USA",
  "lat": 23.1136,
  "lon": -82.3666
}

const buenos_aires = {
  "city" : "Buenos Aires",
  "state" : "Argentina",
  "country": "USA",
  "label": "Buenos Aires, Argentina",
  "lat": 23.1136,
  "lon": -82.3666
}

const greendale_co = {
  "city" : "Greendale",
  "state" : "Colorado",
  "country": "USA",
  "label": "Greendale, Colorado",
  "lat": 33.69066,
  "lon": -117.20163
}

// profile object
const teresa_profile = {
  "first_name": "Teresa Marie",
  "middle_name": "Lao",
  "last_name": "Santos",
  "profile_image_link" : "https://robohash.org/teresa",
  "label" : "Teresa Santos",
  "location" : havana_cuba
}

const address_marker_1 = {
  "type" : "address",
  "data": havana_cuba
}

const my_address_map = {
  "title" : "My Addresses",
  "markers": [
    address_marker_1,
    
  ]
}

const my_friends_map = {
  "title" : "My Friends",
  "markers": [
    
  ]
}


const iseeya_user = {
  "user" : django_user,
  "user_profile":  teresa_profile,
  "maps" : [
    {
      "title" : "My Addresses",
      "markers": [
        {
          "type": "address",
          "data": {
            "location" : { 
              "city" : "Havana",
              "country": "Cuba",
              "label": "Havana, Cuba",
              "coordinates" : {
                "lat": 23.1136,
                "lon": -82.3666
              }
            }
          }
        },
        {
          "type": "address",
          "data" : {
            "location" : {
              "city" : "New York",
              "state" : "New York",
              "country": "USA",
              "label": "New York, USA",
              "coordinates" : {
                "lat": 23.1136,
                "lon": -82.3666
              }
            }
          }
        }
      ]
    },
    {
      "my_map_name": "My Friends",
      "markers": [
        {
          "type" : "friend",
          "data" : {
            "first_name": "Jeff",
            "last_name": "Winger",
            "username": "jeff.winger@greendale.edu",
            "profile_image_link" : "https://robohash.org/jeff",
            "label" : "Jeff Winger",
            "location" : {
              "city" : "Buenos Aires",
              "state" : "Argentina",
              "country": "USA",
              "label": "Buenos Aires, Argentina",
              "coordinates" : {
                "lat": 23.1136,
                "lon": -82.3666
              }
            }
          }
        },
        {
          "type" : "friend",
          "data" : {
            "username": "abed.nadir@abedfilms.com",
            "first_name": "Abed",
            "last_name": "Nadir",
            "label" : "Abed Nadir",
            "location" : {
              "city" : "Greendale",
              "state" : "Colorado",
              "country": "USA",
              "label": "Greendale, Colorado",
              "coordinates" : {
                "lat": 33.69066,
                "lon": -117.20163
              }
            }
          }
        },
        {
          "type" : "friend",
          "data" : {
            "username": "britta.perry@britalution.net",
            "first_name": "Britta",
            "last_name": "Perry",
            "label" : "Britta Perry",
            "profile_image_link" : "https://robohash.org/britta",
            "location" : {
              "city" : "New York",
              "state" : "New York",
              "country": "USA",
              "label": "New York, USA",
              "coordinates" : {
                "lat": 40.7128 ,
                "lon": -74.006
              }
            }
          }
        },
      ]
    }
  ]
}
