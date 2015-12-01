/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        var pushNotification = window.plugins.pushNotification;
        pushNotification.register(app.successHandler, app.errorHandler,{"senderID":"191029629250","ecb":"app.onNotificationGCM"});
    }, 

		// result contains any message sent from the plugin call
     successHandler: function(result) {
         alert('Callback Success! Result = '+result)
     },

     onNotificationGCM: function(e) {
        switch( e.event )
        {
            case 'registered':
            if ( e.regid.length > 0 )
            {
                console.log("Regid " + e.regid);
                alert('registration id = '+e.regid);
            }
            break;

            case 'message':
              // this is the actual push notification. its format depends on the data model from the push server
              alert('message = '+e.message+' msgcnt = '+e.msgcnt);
              break;

              case 'error':
              alert('GCM error = '+e.msg);
              break;

              default:
              alert('An unknown GCM event has occurred');
              break;
        }
    }
};

// Give this the Id of an Audio element, and it'll play the audio 
// Source: http://bit.ly/1I8oz6Y
function playAudio(id) {
  var audioElement = document.getElementById(id);
  var url = audioElement.getAttribute('src');
  var my_media = new Media(url,
    //success callback
    function () { console.log("playAudio():Audio Success"); },
    // error callback
    function (err) { console.log("playAudio():Audio Error: " + err); }
    );
	  // Play audio
	  my_media.play();
  }
}
