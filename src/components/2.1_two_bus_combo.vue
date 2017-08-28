<template>
  <div>

      <v-expansion-panel >
        <v-expansion-panel-content v-for="(bus,i) in sorted_indirect_bus_arr" :key="i" style="width:100%">
          <div slot="header"  @click="detail=true; timetable=false;" v-ripple
            style="width:100%;" >


            <!-- Bus icon by Icons8 -->
   <img class="icon icons8-Bus" width="28" height="24" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC/ElEQVRoQ+1ZS0wTURQ909qPFixVoiEpIhIhJhh1QbpRoGqXGBN1gav6WbkxrjTRaE000ZV7o1Jjggs1UVm4qLGAbogLJbgBUxHFIBEsiNV+pM/p0KmltPPpex0tzls1M+/ce84798570+FQ5oMrc/7QBfxtB2UdIEFUgTN3geP2a0qWkIcg8SOcGzNSeeUF9FqCfKG1a0o+k4w84trikgsnL6DPQlLxzj7uwP3guCY6DrqduLyvR8jFtcUkOSoW0HRqhybkxSTD116VRkDrvVHFQvoP1QtzczHidalAugBxdUi6B5ZNCSmuH8qJzEvIPzFESUkd3FuzlW0T6wLUGQDdgdyn0LIqoalwDF/D0bxFscZhRbXDkveeGhx1CZE+s48/iVxYYELgn3iTITXyblayohs32fPeV4Pz1jSnTkLpOOQif6jj+SwdBc9C4gYmQrJLSA2R7JRqcKIDIr7QoU4XkM9WqRIa//QNnyfn8D2SEKAVNhPWr6tArdOObNw/50AsNo8HPcMZ4rnCU0IOdDTBYjEKtxgIYNvEwRcf8DYUhs1mRn1dFarXrhKITk3/wOjYDCKRODY3OODeuSEtgLKJc/eBJ9O3MBlvES6raUYxzvXbg8JPV4sTK60rFhnwM/oLAy/HYTYb4e1sRq31GfY4TgpzmL2RxZOVeD57CR+ju4sS0NU9hEQiKSnAZDLg/NEv2GU/B7Nhjq2AfM2qxTVmDmhBNl8OXUDujqy1E2wdMFYCDVcAhwcIB4DQGWB+odmKHjIx2QrYcgdY7frDNfyUf6aeKJq7AJSJyVaAa2Qp2YFGOgEyMdkKKHsHhHq9yvfAXr4H+PIJnWbUA4VjsnWArliKQusCSK/lPf9mV1fU8tGCCMa49thGqTDyf6/3m7xIGnyai+DJw5D0ca0JP5UAEew5fFz40JE7At03ZBdBigBtXMXJaRMVEkEb9z8S0HnsNf+lctuilSRkMHD35naaXvVQxlXsAA3JUmJ1AaVcXSWxdQeUrFIp5/wG5XWsQAI+GqoAAAAASUVORK5CYII=">


			  <span style="font-size:18px;font-weight:400">
				<span v-for="(no,i) in bus.bus_1" >
					<span v-if="i ==4" style="margin-left:0px;font-size:15px;visibility:hidden" >
						j
					</span>
					<span v-if="i <=3" style="margin-left:-2px;font-size:11px;color:grey">
						{{no}}
					</span >
					<span v-else-if="i >3 && i<=8" style="margin-left:-4px;font-size:17.5px;font-weight:600;color:rgba(83, 136, 85, 0.84)">
						{{no}}
					</span >
					<span v-else-if="i >8" style="margin-left:-3px;font-size:11px;color:grey">
						{{no}}
					</span >
				</span>
			</span>


			  <span style="font-size:8px">{{bus.bus_1_type}}</span>

              <span ><i class="material-icons" style="font-size:12px;color:grey;margin-left:5px">&#xE409;</i></span>
			  <br>

              <!-- Bus icon by Icons8 -->
    <img style="" class="icon icons8-Bus" width="28" height="24" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC/ElEQVRoQ+1ZS0wTURQ909qPFixVoiEpIhIhJhh1QbpRoGqXGBN1gav6WbkxrjTRaE000ZV7o1Jjggs1UVm4qLGAbogLJbgBUxHFIBEsiNV+pM/p0KmltPPpex0tzls1M+/ce84798570+FQ5oMrc/7QBfxtB2UdIEFUgTN3geP2a0qWkIcg8SOcGzNSeeUF9FqCfKG1a0o+k4w84trikgsnL6DPQlLxzj7uwP3guCY6DrqduLyvR8jFtcUkOSoW0HRqhybkxSTD116VRkDrvVHFQvoP1QtzczHidalAugBxdUi6B5ZNCSmuH8qJzEvIPzFESUkd3FuzlW0T6wLUGQDdgdyn0LIqoalwDF/D0bxFscZhRbXDkveeGhx1CZE+s48/iVxYYELgn3iTITXyblayohs32fPeV4Pz1jSnTkLpOOQif6jj+SwdBc9C4gYmQrJLSA2R7JRqcKIDIr7QoU4XkM9WqRIa//QNnyfn8D2SEKAVNhPWr6tArdOObNw/50AsNo8HPcMZ4rnCU0IOdDTBYjEKtxgIYNvEwRcf8DYUhs1mRn1dFarXrhKITk3/wOjYDCKRODY3OODeuSEtgLKJc/eBJ9O3MBlvES6raUYxzvXbg8JPV4sTK60rFhnwM/oLAy/HYTYb4e1sRq31GfY4TgpzmL2RxZOVeD57CR+ju4sS0NU9hEQiKSnAZDLg/NEv2GU/B7Nhjq2AfM2qxTVmDmhBNl8OXUDujqy1E2wdMFYCDVcAhwcIB4DQGWB+odmKHjIx2QrYcgdY7frDNfyUf6aeKJq7AJSJyVaAa2Qp2YFGOgEyMdkKKHsHhHq9yvfAXr4H+PIJnWbUA4VjsnWArliKQusCSK/lPf9mV1fU8tGCCMa49thGqTDyf6/3m7xIGnyai+DJw5D0ca0JP5UAEew5fFz40JE7At03ZBdBigBtXMXJaRMVEkEb9z8S0HnsNf+lctuilSRkMHD35naaXvVQxlXsAA3JUmJ1AaVcXSWxdQeUrFIp5/wG5XWsQAI+GqoAAAAASUVORK5CYII=">
			<span style="font-size:18px;font-weight:400">
				<span v-for="(no,i) in bus.bus_2" >
					<span v-if="i ==4" style="margin-left:0px;font-size:15px;visibility:hidden" >
						j
					</span>
					<span v-if="i <=3" style="margin-left:-2px;font-size:11px;color:grey">
						{{no}}
					</span >
					<span v-else-if="i >3 && i<=8" style="margin-left:-4px;font-size:17.5px;font-weight:600;color:rgba(83, 136, 85, 0.84)">
						{{no}}
					</span >
					<span v-else-if="i >8" style="margin-left:-2px;font-size:11px;color:grey">
						{{no}}
					</span >
				</span>
			</span>

                <span style="font-size:8px">{{bus.bus_2_type}}</span>

              <br>

              <span style="color:rgba(30, 105, 98, 0.73)">
                <i class="material-icons" style=" transform: scaleX(-1);font-size:14px">&#xE15E;</i>
                <span style="font-weight:600;font-size:14px">{{bus.final_bus_combo_detail_arr[0].show_bus_1_from_time}}</span>
              </span>

                <span style="float:right;margin-right:10px;color:#616a6b">
                  <i class="material-icons" style="font-size:14px">&#xE8B5;</i>
                  <span style="font-size:14px">

                  {{bus.final_bus_combo_detail_arr[0].final_travel_time_mins/60}}hr
                  <span v-if=
                    "bus.final_bus_combo_detail_arr[0].final_travel_time_mins%60 != 0">
                    <span v-if=
                      "bus.final_bus_combo_detail_arr[0].final_travel_time_mins%60 < 10">
                      0{{bus.final_bus_combo_detail_arr[0].final_travel_time_mins%60}}mins
                    </span>
                    <span v-else>
                      {{bus.final_bus_combo_detail_arr[0].final_travel_time_mins%60}}mins
                    </span>
                  </span>

                </span>
              </span>

			<v-divider style="margin-left: 0vh;"></v-divider>
          </div>

          <v-card>
            <v-card-text class="grey lighten-3">

              <!--detail-->
              <div v-show = "detail" style="background:#fff">



                <v-toolbar class="white elevation-0">
                  <v-btn icon light @click="detail=true; timetable=false;">
                  <!-- Point Objects icon by Icons8 -->
    <img class="icon icons8-Point-Objects" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABRklEQVQ4T62UgS0GQRCFv78CVIAKUAEqoAQqQAXogAoogQrQAR1QgV8F5JOZP3NnL7m72GSTu92Zt++9md0F/zwWDbx1YCfWX6aeVwEFugTOC8gSOAUexgJXwBvgbCBxD3gdA5qAsvuMhK9guVsOUPrBFECDnyJBiffx/QzsA0rfmAt4W3x8BzYBWasihwS+gbc4bLXRkuymzLZi+v8IHMe864Hr/UUi1qJYyaMBWdog27SlH3YNXLlYAauPNeEjmKaf7mmLVZfdWgTr8bLf2K3WOQwLLIzJteIngBY4fuP6gBrvyRYimWSjJ6DSt2O/EmgCGmf/Kc9Ev3NUj91z1t5sSq5tIVNZ5ajy+kXJLugUZaDAneXsy35s+jwZsNUJ9SJMBpRZLYQtpc8ra1rv4Rjp+utNknHnFZoLaHsJ+OdJmws4qOIHl0xEFVKCMSgAAAAASUVORK5CYII=">
                  </v-btn>
                  <v-toolbar-title class="grey--text text--darken-4"
                    style="font-size:16px">
                    ROUTE
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>

                <div class="container" style="background:#fff;">
                 <ul class="timeline">

                  <!-- 1 -->
                  <li v-for="(city1,c1)
                   in bus.final_bus_combo_detail_arr[0].new_route_arr_1"
                   class="timeline-inverted">
                   <div class="timeline-badge success"></div>
                    <div class="timeline-panel" style="margin-right: -40px;width: 90%">
                      <div class="timeline-body" style="margin-left: 50px;width:100%">
                        <span v-if="c1==0">
                          <i class="material-icons" style="font-size:14px;color:rgba(0, 128, 0, 0.71)" >&#xE55F;</i>
                          <span style="color:rgba(96, 125, 139, 0.87)">{{city1}}</span>
                          <br>
                          <span style="margin-left:-6px">
                            <!-- Bus icon by Icons8 -->
                            <!-- Bus icon by Icons8 -->
                            <img class="icon icons8-Bus" width="22" height="18" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC/ElEQVRoQ+1ZS0wTURQ909qPFixVoiEpIhIhJhh1QbpRoGqXGBN1gav6WbkxrjTRaE000ZV7o1Jjggs1UVm4qLGAbogLJbgBUxHFIBEsiNV+pM/p0KmltPPpex0tzls1M+/ce84798570+FQ5oMrc/7QBfxtB2UdIEFUgTN3geP2a0qWkIcg8SOcGzNSeeUF9FqCfKG1a0o+k4w84trikgsnL6DPQlLxzj7uwP3guCY6DrqduLyvR8jFtcUkOSoW0HRqhybkxSTD116VRkDrvVHFQvoP1QtzczHidalAugBxdUi6B5ZNCSmuH8qJzEvIPzFESUkd3FuzlW0T6wLUGQDdgdyn0LIqoalwDF/D0bxFscZhRbXDkveeGhx1CZE+s48/iVxYYELgn3iTITXyblayohs32fPeV4Pz1jSnTkLpOOQif6jj+SwdBc9C4gYmQrJLSA2R7JRqcKIDIr7QoU4XkM9WqRIa//QNnyfn8D2SEKAVNhPWr6tArdOObNw/50AsNo8HPcMZ4rnCU0IOdDTBYjEKtxgIYNvEwRcf8DYUhs1mRn1dFarXrhKITk3/wOjYDCKRODY3OODeuSEtgLKJc/eBJ9O3MBlvES6raUYxzvXbg8JPV4sTK60rFhnwM/oLAy/HYTYb4e1sRq31GfY4TgpzmL2RxZOVeD57CR+ju4sS0NU9hEQiKSnAZDLg/NEv2GU/B7Nhjq2AfM2qxTVmDmhBNl8OXUDujqy1E2wdMFYCDVcAhwcIB4DQGWB+odmKHjIx2QrYcgdY7frDNfyUf6aeKJq7AJSJyVaAa2Qp2YFGOgEyMdkKKHsHhHq9yvfAXr4H+PIJnWbUA4VjsnWArliKQusCSK/lPf9mV1fU8tGCCMa49thGqTDyf6/3m7xIGnyai+DJw5D0ca0JP5UAEew5fFz40JE7At03ZBdBigBtXMXJaRMVEkEb9z8S0HnsNf+lctuilSRkMHD35naaXvVQxlXsAA3JUmJ1AaVcXSWxdQeUrFIp5/wG5XWsQAI+GqoAAAAASUVORK5CYII=">
                             <span style="font-size:18px;font-weight:400">
                              <span v-for="(no,i) in bus.bus_1" >
                                <span v-if="i ==4" style="margin-left:0px;font-size:15px;visibility:hidden" >
                                  j
                                </span>
                                <span v-if="i <=3" style="margin-left:-2px;font-size:11px;color:grey">
                                  {{no}}
                                </span >
                                <span v-else-if="i >3 && i<=8" style="margin-left:-4px;font-size:17.5px;font-weight:600;color:rgba(83, 136, 85, 0.84)">
                                  {{no}}
                                </span >
                                <span v-else-if="i >8" style="margin-left:-2px;font-size:11px;color:grey">
                                  {{no}}
                                </span >
                              </span>
                            </span>
                            <span style="font-size:7px">{{bus.bus_1_type}}</span>
                          </span>
                          <br>
                          <i class="material-icons" style=" transform: scaleX(-1);font-size:14px">&#xE15E;</i>
                          <span v-for="(time_from_1,t1) in
                            bus.final_bus_combo_detail_arr">
                            <span v-if="t1<=2">
                              <v-chip  style="    background: #fff;height: 26px;padding:0 10px;width:55px; margin-left:-4px">
                                 <span >{{time_from_1.show_bus_1_from_time}}</span>
                               </v-chip>
                            </span>
                          </span>
                          <br>
                           <v-btn outline class="grey #eeeeee--text" @click="detail=false; timetable=true;" style="height: auto;" >
							<i class="material-icons" style="font-size:10px;margin-top:6px">&#xE8B5;</i>
							<span style="font-size:10px;"> TIMETABLE </span>
							<i class="material-icons" style="font-size:12px;margin-top:6px">&#xE315;</i>
						   </v-btn>
                        </span>
                        <span v-else-if="c1==
                          bus.final_bus_combo_detail_arr[0].new_route_arr_1.length-1">
                          <i class="material-icons" style="font-size:14px;color: rgba(30, 105, 98, 0.73)" >&#xE55F;</i>
                          <span style="color:rgba(96, 125, 139, 0.87)">{{city1}}</span>
                         <br>
                         @
                         <span v-for="(time_to_1,t2) in
                           bus.final_bus_combo_detail_arr" >
                           <span v-if="t2<=2">
                             <v-chip  style="    background: #fff;height: 26px;padding:0 10px;width:55px; margin-left:-4px">
                               {{time_to_1.show_bus_1_to_time}}
                             </v-chip>
                           </span>
                         </span>
                        </span>
                        <span v-else>
                          <i class="material-icons" style="font-size:14px;color:grey" >&#xE55F;</i>
                          <span style="color:rgba(96, 125, 139, 0.87)">{{city1}}</span>
                        </span>
                      </div>
                    </div>
                  </li>
				<!--
                </ul>
                </div>
				-->

                  <!-- 2 -->
				  <!--
                <div class="container" style="background:#fff">
                 <ul class="timeline">
				 -->

                  <li v-for="(city2,c2)
                   in bus.final_bus_combo_detail_arr[0].new_route_arr_2">
                   <div class="timeline-badge success2"></div>
                   <div class="timeline-panel" style="margin-right: -40px;width: 90%">
                     <div class="timeline-body"  style="margin-left: 50px;width:100%" >
                        <span v-if="c2==0">
                          <i class="material-icons" style="font-size:14px;color: rgba(30, 105, 98, 0.73)" >&#xE55F;</i>
                          <span style="color:rgba(96, 125, 139, 0.87)">{{city2}}</span>
                          <br>
                          <span style="margin-left:-6px">

                             <!-- Bus icon by Icons8 -->
                            <img class="icon icons8-Bus" width="22" height="18" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC/ElEQVRoQ+1ZS0wTURQ909qPFixVoiEpIhIhJhh1QbpRoGqXGBN1gav6WbkxrjTRaE000ZV7o1Jjggs1UVm4qLGAbogLJbgBUxHFIBEsiNV+pM/p0KmltPPpex0tzls1M+/ce84798570+FQ5oMrc/7QBfxtB2UdIEFUgTN3geP2a0qWkIcg8SOcGzNSeeUF9FqCfKG1a0o+k4w84trikgsnL6DPQlLxzj7uwP3guCY6DrqduLyvR8jFtcUkOSoW0HRqhybkxSTD116VRkDrvVHFQvoP1QtzczHidalAugBxdUi6B5ZNCSmuH8qJzEvIPzFESUkd3FuzlW0T6wLUGQDdgdyn0LIqoalwDF/D0bxFscZhRbXDkveeGhx1CZE+s48/iVxYYELgn3iTITXyblayohs32fPeV4Pz1jSnTkLpOOQif6jj+SwdBc9C4gYmQrJLSA2R7JRqcKIDIr7QoU4XkM9WqRIa//QNnyfn8D2SEKAVNhPWr6tArdOObNw/50AsNo8HPcMZ4rnCU0IOdDTBYjEKtxgIYNvEwRcf8DYUhs1mRn1dFarXrhKITk3/wOjYDCKRODY3OODeuSEtgLKJc/eBJ9O3MBlvES6raUYxzvXbg8JPV4sTK60rFhnwM/oLAy/HYTYb4e1sRq31GfY4TgpzmL2RxZOVeD57CR+ju4sS0NU9hEQiKSnAZDLg/NEv2GU/B7Nhjq2AfM2qxTVmDmhBNl8OXUDujqy1E2wdMFYCDVcAhwcIB4DQGWB+odmKHjIx2QrYcgdY7frDNfyUf6aeKJq7AJSJyVaAa2Qp2YFGOgEyMdkKKHsHhHq9yvfAXr4H+PIJnWbUA4VjsnWArliKQusCSK/lPf9mV1fU8tGCCMa49thGqTDyf6/3m7xIGnyai+DJw5D0ca0JP5UAEew5fFz40JE7At03ZBdBigBtXMXJaRMVEkEb9z8S0HnsNf+lctuilSRkMHD35naaXvVQxlXsAA3JUmJ1AaVcXSWxdQeUrFIp5/wG5XWsQAI+GqoAAAAASUVORK5CYII=">
                             <span style="font-size:18px;font-weight:400">
                              <span v-for="(no,i) in bus.bus_2" >
                                <span v-if="i ==4" style="margin-left:0px;font-size:15px;visibility:hidden" >
                                  j
                                </span>
                                <span v-if="i <=3" style="margin-left:-2px;font-size:11px;color:grey">
                                  {{no}}
                                </span >
                                <span v-else-if="i >3 && i<=8" style="margin-left:-4px;font-size:17.5px;font-weight:600;color:rgba(83, 136, 85, 0.84)">
                                  {{no}}
                                </span >
                                <span v-else-if="i >8" style="margin-left:-2px;font-size:11px;color:grey">
                                  {{no}}
                                </span >
                              </span>
                            </span>

                            <span style="font-size:7px">{{bus.bus_2_type}}</span>
                          </span>
                          <br>
                          <i class="material-icons" style=" transform: scaleX(-1);font-size:14px">&#xE15E;</i>
                          <span v-for="(time_from_2,t2) in
                            bus.final_bus_combo_detail_arr">
                            <span v-if="t2<=2">

                              <v-chip  style="    background: #fff;height: 26px;padding:0 10px;width:55px; margin-left:-4px">
                                 <span >{{time_from_2.show_bus_2_from_time}}</span>
                               </v-chip>
                            </span>
                          </span>
                          <br>
                           <v-btn outline class="grey #eeeeee--text" @click="detail=false; timetable=true;" style="height: auto;" >
							<i class="material-icons" style="font-size:10px;margin-top:6px">&#xE8B5;</i>
							<span style="font-size:10px;"> TIMETABLE </span>
							<i class="material-icons" style="font-size:12px;margin-top:6px">&#xE315;</i>
						   </v-btn>
                        </span>
                        <span v-else-if="c2==
                          bus.final_bus_combo_detail_arr[0].new_route_arr_2.length-1">
                         <i class="material-icons" style="font-size:14px;color:rgba(255, 0, 0, 0.68)">&#xE55F;</i>
                          <span style="color:rgba(96, 125, 139, 0.87)">{{city2}}</span>
                         <br>
                         @
                         <span v-for="(time_to_2,t2) in
                           bus.final_bus_combo_detail_arr">
                           <span v-if="t2<=2">
                             <v-chip  style="    background: #fff;height: 26px;padding:0 10px;width:55px; margin-left:-4px">
                              {{time_to_2.show_bus_2_to_time}}
                             </v-chip>
                           </span>
                         </span>
                        </span>
                        <span v-else style="color:grey">
							<i class="material-icons" style="font-size:14px;color:grey" >&#xE55F;</i>
							<span style="color:rgba(96, 125, 139, 0.87)">{{city2}}</span>
						</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>


              </div>
              <!-- detail ends-->



              <!-- timetable -->
              <div v-show = "timetable" style="background:#fff;margin-bottom:5px">

                <v-toolbar class="white elevation-0">
                  <v-btn icon light @click="detail=true; timetable=false;">
                    <v-icon class="grey--text text--darken-2">
                      arrow_back
                    </v-icon>
                  </v-btn>
                  <v-toolbar-title class="grey--text text--darken-4"
                    style="font-size:16px">
                    TIMETABLE
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>


                <!--1-->
                <v-layout row wrap id="parent">
                  <v-flex xs5 class="child" id ="left" >
				   <span style="float:right">
                    <tr v-for="(city,i) in
                      bus.final_bus_combo_detail_arr[0].new_route_arr_1" >

                      <span v-if="i==0">
                        <v-chip label outline class="#eeeeee black--text elevation-5" style="width:100%;min-width:123px" >
                          <i class="material-icons" style="font-size:13px;margin-top: 8px;
                            color:green" >&#xE3FA;</i>
                          {{city}}
                        </v-chip>
                        <br>
                        <v-chip label outline class="#eeeeee black--text elevation-5" style="width:100%;min-width:123px ">
                           <!-- Bus icon by Icons8 -->
                        <img class="icon icons8-Bus" width="22" height="18" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC/ElEQVRoQ+1ZS0wTURQ909qPFixVoiEpIhIhJhh1QbpRoGqXGBN1gav6WbkxrjTRaE000ZV7o1Jjggs1UVm4qLGAbogLJbgBUxHFIBEsiNV+pM/p0KmltPPpex0tzls1M+/ce84798570+FQ5oMrc/7QBfxtB2UdIEFUgTN3geP2a0qWkIcg8SOcGzNSeeUF9FqCfKG1a0o+k4w84trikgsnL6DPQlLxzj7uwP3guCY6DrqduLyvR8jFtcUkOSoW0HRqhybkxSTD116VRkDrvVHFQvoP1QtzczHidalAugBxdUi6B5ZNCSmuH8qJzEvIPzFESUkd3FuzlW0T6wLUGQDdgdyn0LIqoalwDF/D0bxFscZhRbXDkveeGhx1CZE+s48/iVxYYELgn3iTITXyblayohs32fPeV4Pz1jSnTkLpOOQif6jj+SwdBc9C4gYmQrJLSA2R7JRqcKIDIr7QoU4XkM9WqRIa//QNnyfn8D2SEKAVNhPWr6tArdOObNw/50AsNo8HPcMZ4rnCU0IOdDTBYjEKtxgIYNvEwRcf8DYUhs1mRn1dFarXrhKITk3/wOjYDCKRODY3OODeuSEtgLKJc/eBJ9O3MBlvES6raUYxzvXbg8JPV4sTK60rFhnwM/oLAy/HYTYb4e1sRq31GfY4TgpzmL2RxZOVeD57CR+ju4sS0NU9hEQiKSnAZDLg/NEv2GU/B7Nhjq2AfM2qxTVmDmhBNl8OXUDujqy1E2wdMFYCDVcAhwcIB4DQGWB+odmKHjIx2QrYcgdY7frDNfyUf6aeKJq7AJSJyVaAa2Qp2YFGOgEyMdkKKHsHhHq9yvfAXr4H+PIJnWbUA4VjsnWArliKQusCSK/lPf9mV1fU8tGCCMa49thGqTDyf6/3m7xIGnyai+DJw5D0ca0JP5UAEew5fFz40JE7At03ZBdBigBtXMXJaRMVEkEb9z8S0HnsNf+lctuilSRkMHD35naaXvVQxlXsAA3JUmJ1AaVcXSWxdQeUrFIp5/wG5XWsQAI+GqoAAAAASUVORK5CYII=">
                         <span style="font-size:18px;font-weight:400">
                          <span v-for="(no,i) in bus.bus_1" >
                            <span v-if="i ==4" style="margin-left:0px;font-size:15px;visibility:hidden" >
                              j
                            </span>
                            <span v-if="i <=3" style="margin-left:-2px;font-size:11px;color:grey">
                              {{no}}
                            </span >
                            <span v-else-if="i >3 && i<=8" style="margin-left:-4px;font-size:17.5px;font-weight:600;color:rgba(83, 136, 85, 0.84)">
                              {{no}}
                            </span >
                            <span v-else-if="i >8" style="margin-left:-2px;font-size:11px;color:grey">
                              {{no}}
                            </span >
                          </span>
                        </span>
                        </v-chip>
                      </span>

                      <span v-else-if="i==bus.final_bus_combo_detail_arr[0].new_route_arr_1.length-1" >
                      <v-chip label outline class="#eeeeee black--text elevation-5" style="width:100%;min-width:123px">
                        <i class="material-icons" style="font-size:13px;
                          color:rgba(247, 187, 7, 0.77);margin-top: 8px;">&#xE3FA;</i>
                        {{city}}
                      </v-chip>
                      </span>

                      <span v-else>
                        <v-chip label outline class="#eeeeee grey--text elevation-5 " style="width:100%;min-width:123px">
						<i class="material-icons" style="font-size:13px;
                            color:rgba(212, 212, 212, 0.78);margin-top: 8px;">&#xE3FA;</i>
						 {{city}}
                        </v-chip>
                      </span>

                    </tr>
				   </span>
                  </v-flex>



                  <v-flex xs7 class="child" id ="right">

                    <td v-for="(timetableX,j) in bus.timeTableArr1">
                      <tr v-for="(time,k) in bus.timeTableArr1[j]">


                        <span v-if="k==bus.mark_from_1">
                          <v-chip label outline class="#eeeeee black--text elevation-5" style="" v-if="time.length==4"> 0{{time}} </v-chip>
                          <v-chip label outline class="#eeeeee black--text elevation-5" style="" v-else> {{time}} </v-chip>
						  <div>
							  <v-chip label outline class="#eeeeee black--text " style="visibility:hidden">
								junk
							  </v-chip>
						  </div>
                        </span>

                        <span v-else-if="k == bus.mark_to_1">
                          <v-chip label outline class="#eeeeee black--text elevation-5" style="" v-if="time.length==4">0{{time}}</v-chip>
                          <v-chip label outline class="#eeeeee black--text elevation-5" style="" v-else>{{time}}</v-chip>
                        </span>

                        <span v-else-if="k > bus.mark_from_1 && k <= bus.mark_to_1">
                          <v-chip label outline class="#eeeeee grey--text elevation-5" style="" v-if="time.length==4">0{{time}}</v-chip>
                          <v-chip label outline class="#eeeeee grey--text elevation-5" style="" v-else>{{time}}</v-chip>
                        </span>


                      </tr>
                    </td>
                  </v-flex>
                </v-layout>

                  <!--2-->
                  <v-layout row wrap id="parent">
                  <v-flex xs5 class="child" id ="left" >
				   <span style="float:right">

                    <tr v-for="(city,i) in
                      bus.final_bus_combo_detail_arr[0].new_route_arr_2" >

                      <span v-if="i==0">
                        <v-chip label outline class="#eeeeee black--text elevation-5" style="width:100%;min-width:123px" >
                          <i class="material-icons" style="font-size:13px;
                            color:rgba(247, 187, 7, 0.77);margin-top: 8px;">&#xE3FA;</i>
                          {{city}}
                        </v-chip>
                        <br>
                        <v-chip label outline class="#eeeeee black--text elevation-5" style="width:100%;min-width:123px ">
                          <!-- Bus icon by Icons8 -->
                        <img class="icon icons8-Bus" width="22" height="18" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC/ElEQVRoQ+1ZS0wTURQ909qPFixVoiEpIhIhJhh1QbpRoGqXGBN1gav6WbkxrjTRaE000ZV7o1Jjggs1UVm4qLGAbogLJbgBUxHFIBEsiNV+pM/p0KmltPPpex0tzls1M+/ce84798570+FQ5oMrc/7QBfxtB2UdIEFUgTN3geP2a0qWkIcg8SOcGzNSeeUF9FqCfKG1a0o+k4w84trikgsnL6DPQlLxzj7uwP3guCY6DrqduLyvR8jFtcUkOSoW0HRqhybkxSTD116VRkDrvVHFQvoP1QtzczHidalAugBxdUi6B5ZNCSmuH8qJzEvIPzFESUkd3FuzlW0T6wLUGQDdgdyn0LIqoalwDF/D0bxFscZhRbXDkveeGhx1CZE+s48/iVxYYELgn3iTITXyblayohs32fPeV4Pz1jSnTkLpOOQif6jj+SwdBc9C4gYmQrJLSA2R7JRqcKIDIr7QoU4XkM9WqRIa//QNnyfn8D2SEKAVNhPWr6tArdOObNw/50AsNo8HPcMZ4rnCU0IOdDTBYjEKtxgIYNvEwRcf8DYUhs1mRn1dFarXrhKITk3/wOjYDCKRODY3OODeuSEtgLKJc/eBJ9O3MBlvES6raUYxzvXbg8JPV4sTK60rFhnwM/oLAy/HYTYb4e1sRq31GfY4TgpzmL2RxZOVeD57CR+ju4sS0NU9hEQiKSnAZDLg/NEv2GU/B7Nhjq2AfM2qxTVmDmhBNl8OXUDujqy1E2wdMFYCDVcAhwcIB4DQGWB+odmKHjIx2QrYcgdY7frDNfyUf6aeKJq7AJSJyVaAa2Qp2YFGOgEyMdkKKHsHhHq9yvfAXr4H+PIJnWbUA4VjsnWArliKQusCSK/lPf9mV1fU8tGCCMa49thGqTDyf6/3m7xIGnyai+DJw5D0ca0JP5UAEew5fFz40JE7At03ZBdBigBtXMXJaRMVEkEb9z8S0HnsNf+lctuilSRkMHD35naaXvVQxlXsAA3JUmJ1AaVcXSWxdQeUrFIp5/wG5XWsQAI+GqoAAAAASUVORK5CYII=">
                         <span style="font-size:18px;font-weight:400">
                          <span v-for="(no,i) in bus.bus_2" >
                            <span v-if="i ==4" style="margin-left:0px;font-size:15px;visibility:hidden" >
                              j
                            </span>
                            <span v-if="i <=3" style="margin-left:-2px;font-size:11px;color:grey">
                              {{no}}
                            </span >
                            <span v-else-if="i >3 && i<=8" style="margin-left:-4px;font-size:17.5px;font-weight:600;color:rgba(83, 136, 85, 0.84)">
                              {{no}}
                            </span >
                            <span v-else-if="i >8" style="margin-left:-2px;font-size:11px;color:grey">
                              {{no}}
                            </span >
                          </span>
                        </span>
                        </v-chip>
                      </span>

                      <span v-else-if="i==bus.final_bus_combo_detail_arr[0].new_route_arr_2.length-1" >
                      <v-chip label outline class="#eeeeee black--text elevation-5" style="width:100%;min-width:123px">
                        <i class="material-icons" style="font-size:13px;
                          color:rgba(189, 48, 48, 0.93);margin-top: 8px;">&#xE3FA;</i>
                        {{city}}
                      </v-chip>
                      </span>

                      <span v-else>
                        <v-chip label outline class="#eeeeee grey--text elevation-5" style="width:100%;min-width:123px;text-align:center">
						<i class="material-icons" style="font-size:13px;
                            color:rgba(212, 212, 212, 0.78);margin-top: 8px;">&#xE3FA;</i>
						  {{city}}
                        </v-chip>
                      </span>

                    </tr>
				   </span>
                  </v-flex>


                  <v-flex xs7 class="child" id ="right" >
                  <div class="p1">
                  <div class="c1">
                  <span v-for="(time_from_2,t2) in
                    bus.final_bus_combo_detail_arr" >
					<!--#{{time_from_2.show_bus_2_from_time}}#-->
                    <td v-for="(timetableX,j) in bus.timeTableArr2">
					<!--{{timetableX}}-->
                      <div v-if="time_from_2.show_bus_2_from_time ==
                        bus.timeTableArr2[j][bus.mark_from_2]" >
						<!--{{time_from_2.show_bus_2_from_time}} $ {{bus.timeTableArr2[j][0]}}-->
                        <tr v-for="(time,k) in bus.timeTableArr2[j]">

                          <span v-if="k==bus.mark_from_2">
                            <v-chip label outline class="#eeeeee black--text elevation-5" style="" v-if="time.length==4">
                              0{{time}}
                            </v-chip>
                            <v-chip label outline class="#eeeeee black--text elevation-5" style="" v-else>
                              {{time}}
                            </v-chip>
                            <div>
							 <v-chip label outline class="#eeeeee black--text " style="visibility:hidden">
								junk
							 </v-chip>
						   </div>
                          </span>

                          <span v-else-if="k == bus.mark_to_2">
                            <v-chip label outline class="#eeeeee black--text elevation-5" style="" v-if="time.length==4">0{{time}}</v-chip>
                            <v-chip label outline class="#eeeeee black--text elevation-5" style="" v-else>{{time}}</v-chip>
                          </span>

                          <span v-else-if="k > bus.mark_from_2 && k < bus.mark_to_2" style="">
                            <v-chip label outline class="#eeeeee grey--text elevation-5" v-if="time.length==4">0{{time}}</v-chip>
                            <v-chip label outline class="#eeeeee grey--text elevation-5" v-else>{{time}}</v-chip>
                          </span>

                        </tr>
                      </div>
                    </td>
                  </span>

                  </div>
                  </div>
                  </v-flex>


                </v-layout>

              </div>
              <!-- timetable ends -->

            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>


  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default{
  data(){
    return{
      indirect_bus_arr : [],
      indirect_bus_flg : false,
      detail:true,
      timetable:false
    }
  },
  methods:{
    get_indirect_routes(){
      //this.$store.state.show_p_bar = true
      this.indirect_bus_arr = []
      //indirect search begins
      let from_city = this.$store.state.from_city
      //console.log(from_city)
      let to_city = this.$store.state.to_city
      //console.log(to_city)

      this.$http.get('city_route_matrix/'+from_city.name+'.json')
      .then(response=>{
        let waypoints=response.body
        this.indirect_bus_flg = false
        for(let waypoint in Object.keys(waypoints)){
          //console.log(Object.keys(waypoints)[waypoint])
          this.$http.get('city_route_matrix/'+Object.keys(waypoints)[waypoint]
            +'/'+to_city.name+'.json')
          .then(response=>{
            let routes_2 = response.body
            if(routes_2 != null){ //here we start getting route, wp -> to
              for(let route_2 in routes_2){
               //if(this.$store.state.from_city.name.indexOf(routes_2[route_2]) == -1){
                this.$http.get('city_route_matrix/'+from_city.name+'/'
                  +Object.keys(waypoints)[waypoint]+'.json')
                .then(response=>{
                  let routes_1 = response.body
                  for(let route_1 in routes_1){

                  // if(this.$store.state.to_city.name.indexOf(routes_1[route_1])==-1){

                    //console.log(route_1 + " " + route_2)
                    //got_indirect_route_combo :)
                    //console.log(this.$store.state.direct_bus_route_str)

                     if(this.$store.state.direct_bus_route_str.indexOf(routes_1[route_1])==-1
                     && this.$store.state.direct_bus_route_str.indexOf(routes_2[route_2]==-1)){

                     //MORE CHECK ROUTE

                      this.$http.get('bus_routes/'+routes_1[route_1]+'.json')
                      .then(response=>{
                        //console.log(response.body)
                        let route_1_arr = response.body


                        this.$http.get('bus_routes/'+routes_2[route_2]+'.json')
                        .then(response=>{
                          //console.log(response.body)
                          let route_2_arr = response.body
                          //console.log(route_1_arr+ " 1 " +to_city.name+
                            //" 2 "+ route_2_arr+ " 3 "+from_city.name )

                            if(route_1_arr.indexOf(to_city.name)==-1){
                              if(route_2_arr.indexOf(from_city.name)==-1){

                                let false_route_flg = false
                                for(let m1=0 ; m1<=route_1_arr.length-2 ; m1++){
                                  for(let m2=1 ; m2<=route_2_arr.length-1 ; m2++){
                                    if(route_1_arr[m1]==route_2_arr[m2]){
                                        //console.log(route_1_arr[m1], route_2_arr[m2])
                                        false_route_flg = true
                                    }
                                  }
                                }

                              //  console.log(routes_1[route_1],
                                //  Object.keys(waypoints)[waypoint],
                                  //  routes_2[route_2], route_1_arr, route_2_arr)

                                  //call get_bus
                                  if(false_route_flg == false){
                                   this.get_bus(routes_1[route_1],
                                    Object.keys(waypoints)[waypoint],
                                      routes_2[route_2], route_1_arr, route_2_arr)
                                      this.indirect_bus_flg = true
                                  }
                                }
                            }

                          return response.json()
                        })

                        return response.json()

                      })
                      //MORE CHECK ROUTE ends
                    }
                  // }
                  }
                  return response.json()
                })

            //   }
              }
            }else{
              //find 3 buses route
              //this.$store.state.show_p_bar = false
            }
            return response.json()
          })
        }
        if(this.indirect_bus_flg == false){
          //this.$store.state.show_p_bar = false
        }
        return response.json()
      })
    },
    //indirect search ends

    get_bus(route_1, waypoint, route_2, route_1_arr, route_2_arr){
      //console.log(route_1, waypoint, route_2)
      this.$http.get('buses_on_route/'+route_1+'.json')
      .then(response=>{
        let buses_1 = response.body
        //console.log(buses_1)
        for(let bus_1 in buses_1){
          this.$http.get('buses_on_route/'+route_2+'.json')
          .then(response=>{
            let buses_2 = response.body
            //console.log(buses_2)
            for(let bus_2 in buses_2){
              //console.log(buses_1[bus_1]+" on "+route_1 + " | " +
                //buses_2[bus_2]+" on "+route_2)
              this.get_bus_type(buses_1[bus_1], route_1, waypoint, buses_2[bus_2], route_2,
                route_1_arr, route_2_arr)
            }
            response.json()
          })
        }
        return response.json()
      })
    },
    //GET_BUS ends

    get_bus_type(bus_1, route_1, waypoint, bus_2, route_2, route_1_arr, route_2_arr){
      this.$http.get('bus_type/'+bus_1+'.json')
      .then(response=>{
        let bus_1_type = response.body

        this.$http.get('bus_type/'+bus_2+'.json')
        .then(response=>{
          let bus_2_type = response.body

          this.mark_on_route(bus_1, bus_1_type, route_1, waypoint, bus_2, bus_2_type,
          route_2,  route_1_arr, route_2_arr)

          return response.json()
        })
        return response.json()
      })
    },
    //GET_BUS_TYPE ends

    mark_on_route(bus_1, bus_1_type, route_1, waypoint, bus_2, bus_2_type, route_2,
      route_1_arr, route_2_arr){

        //this.$http.get('bus_routes/'+route_1+'.json')
        //.then(response=>{
         //let cities_1 = response.body
         let cities_1 = route_1_arr
         //console.log(cities_1)
         let mark_from_1 = -1 , mark_to_1 = -1
         for(let city_1 in cities_1){
          //mark_from
          if(cities_1[city_1] == this.$store.state.from_city.name){
            mark_from_1 = city_1
            //console.log(mark_from_1)
          }
          //mark_to
          else if(cities_1[city_1] == waypoint){
            mark_to_1 = city_1
            //console.log(mark_to_1)
          }
          if(mark_from_1 != -1 && mark_to_1 != -1){
            break
          }
         }

         //mark on => route_2
         //this.$http.get('bus_routes/'+route_2+'.json')
         //.then(response=>{
        //  let cities_2 = response.body
          let cities_2 = route_2_arr
          //console.log(cities_2)
          let mark_from_2 = -1 , mark_to_2 = -1
          for(let city_2 in cities_2){
           //mark_from
           if(cities_2[city_2] == waypoint){
             mark_from_2 = city_2
             //console.log(mark_from_2)
           }
           //mark_to
           else if(cities_2[city_2] == this.$store.state.to_city.name){
             mark_to_2 = city_2
             //console.log(mark_to_2)
           }
           if(mark_to_2 != -1 && mark_to_2 != -1){

           //call get_travel_time
           this.get_next_schedule(bus_1 , bus_1_type, route_1, mark_from_1, mark_to_1,
            waypoint, mark_from_2, mark_to_2, bus_2, bus_2_type, route_2,cities_1,cities_2)

            break
           }
          }

          /*return response.json()
         })
         return response.json()
      })
      */

    },
    //MARK ON ROUTE ends

    get_next_schedule(bus_1 , bus_1_type, route_1, mark_from_1, mark_to_1,
     waypoint, mark_from_2, mark_to_2, bus_2, bus_2_type, route_2,route_1_arr,
     route_2_arr){


      //REAL DEAL STARTS HERE !
      //lastest time
      let current_time = moment.utc(moment().format("HH:mm"),"HH:mm")

      this.$http.get('bus_timetable/'+bus_1+'.json')
      .then(response=>{
        let timeTableArr1 = response.body
        this.$http.get('bus_timetable/'+bus_2+'.json')
        .then(response=>{
          let timeTableArr2 = response.body

          //1
          let bus_1_from_time , bus_1_to_time
          let next_schedule_1 , next_schedule_1_to
          let next_schedule_1_arr=[] , next_schedule_1_to_arr=[]
          let next_schedule_1_time , next_schedule_1_time_arr = [] ,
            next_schedule_1_time_mins
          let travel_1_time= '' , travel_1_time_mins = 0 ,
            travel_1_time_mins_arr =[] , new_travel_1_time_mins = 0

          //2
          let bus_2_from_time , bus_2_to_time
          let next_schedule_2 , next_schedule_2_to
          let next_schedule_2_arr=[] , next_schedule_2_to_arr=[]
          let next_schedule_2_time , next_schedule_2_time_arr = [] ,
            next_schedule_2_time_mins
          let travel_2_time= '' , travel_2_time_mins = 0 ,
            travel_2_time_mins_arr =[] , new_travel_2_time_mins = 0

          //final
          let next_schedule_time_arr = []
          let final_bus_combo_detail_arr = []

          for(let timeTableX1 in timeTableArr1){
            next_schedule_time_arr = []
            //for(let time1 in timeTableArr1[timeTableX1]){
              //if(mark_from_1 == time1){
                bus_1_from_time = moment.utc(timeTableArr1[timeTableX1][mark_from_1],
                  "HH:mm")

                let show_bus_1_from_time=moment(bus_1_from_time).format("H:mm")

                let f1 = false
                //compare - add 1 day if current time is less
                if(!current_time.isBefore(bus_1_from_time)){
                  bus_1_from_time.add(1,'day')
                  f1= true
                }

                next_schedule_1 = timeTableArr1[timeTableX1][mark_from_1]

                //check_to_time
                //for(let time_1_to=time1 ; time_1_to <timeTableArr1[timeTableX1].length ;
                  //time_1_to++){
                  //if(mark_to_1 == time_1_to){
                    bus_1_to_time = moment.utc(timeTableArr1[timeTableX1][mark_to_1],
                      "HH:mm")

                    if(f1)
                      bus_1_to_time.add(1,'day')

                    let show_bus_1_to_time=moment(bus_1_to_time).format("H:mm")


                    next_schedule_1_to = timeTableArr1[timeTableX1][mark_to_1]
                    next_schedule_1_arr.push(next_schedule_1) //why
                    next_schedule_1_to_arr.push(next_schedule_1_to) //why

                    //calculate -> next_schedule - current_time
                    //bus kitne der baad h
                    next_schedule_1_time =
                      moment.duration(bus_1_from_time.diff(current_time))

                    //next_schedule_time_mins -> parse in mins
                    let next_schedule_1_time_mins =
                      moment.duration(next_schedule_1_time).asMinutes();

                    //calculate - travel_time
                    if (bus_1_to_time.isBefore(bus_1_from_time))
                      bus_1_to_time.add(1, 'day')

                    travel_1_time = moment.duration(bus_1_to_time.diff(bus_1_from_time));
                    travel_1_time_mins = moment.duration(travel_1_time).asMinutes();
                    //
                    new_travel_1_time_mins = next_schedule_1_time_mins +
                      travel_1_time_mins





                    //Now compare bus_2 with -> bus_1_to_time (assume it current)
                    for(let timeTableX2 in timeTableArr2){
                      //for(let time2 in timeTableArr2[timeTableX2]){
                        //if(mark_from_2 == time2){
                          bus_2_from_time =
                            moment.utc(timeTableArr2[timeTableX2][mark_from_2],
                            "HH:mm")

                          let show_bus_2_from_time=
                            moment(bus_2_from_time).format("H:mm")

                          if(f1)
                            bus_2_from_time.add(1,'day')

                          let f = false
                          if(!bus_1_to_time.isBefore(bus_2_from_time)){
                            bus_2_from_time.add(1, 'day')
                            f = true
                          }

                          next_schedule_2 =  timeTableArr2[timeTableX2][mark_to_2]
                          //for(let time_2_to=time2 ;
                            //time_2_to <timeTableArr2[timeTableX2].length ;
                            //time_2_to++){

                            //if(mark_to_2 == time_2_to){
                              bus_2_to_time =
                                moment.utc(timeTableArr2[timeTableX2][mark_to_2],
                                "HH:mm")

                              if(f1)
                                bus_2_to_time.add(1, 'day')
                              if(f)
                                bus_2_to_time.add(1, 'day')

                              let show_bus_2_to_time=
                                moment(bus_2_to_time).format("H:mm")

                              next_schedule_2_to = timeTableArr2[timeTableX2][mark_to_2]
                              next_schedule_2_arr.push(next_schedule_2)
                              next_schedule_2_to_arr.push(next_schedule_2_to)

                              //calculate next_schedule - current_time
                              next_schedule_2_time =
                                moment.duration(bus_2_from_time.diff(bus_1_to_time))
                              next_schedule_2_time_mins =
                                moment.duration(next_schedule_2_time).asMinutes();

                               // account for crossing over to midnight the next day
                              if (bus_2_to_time.isBefore(bus_2_from_time))
                                bus_2_to_time.add(1, 'day')

                              travel_2_time =
                                moment.duration(bus_2_to_time.diff(bus_2_from_time));
                              travel_2_time_mins = moment.duration(travel_2_time).asMinutes();
                              new_travel_2_time_mins = next_schedule_2_time_mins
                                + travel_2_time_mins

                              //final travel_time :/
                              let final_travel_time_mins =
                                travel_1_time_mins + next_schedule_2_time_mins
                                  + travel_2_time_mins



                              //before pushing manipulate to show on dom - bus_1_from_time
                              let bus_2_travel_plus_board_mins =  next_schedule_2_time_mins +
                                travel_2_time_mins

                              //console.log(final_travel_time_mins)

                              //check
                              //console.log(bus_1+" "+show_bus_1_from_time+ " " +show_bus_1_to_time
                                //+" "+bus_2+" "+ show_bus_2_from_time+" "+show_bus_2_to_time+ " "+
                                 // bus_2_travel_plus_board_mins)

                              //bus_2_total_time + wait inbetween bus1 & bus2


                              //route extract
                              let new_route_arr_1 = [] , new_route_arr_2 = []
                              for(let city=mark_from_1 ; city <= mark_to_1 ; city++){
                                new_route_arr_1.push(route_1_arr[city])
                              }
                              for(let city=mark_from_2 ; city <= mark_to_2 ; city++){
                                new_route_arr_2.push(route_2_arr[city])
                              }


                              let next_schedule_time_obj = {
                                  final_travel_time_mins,
                                  next_schedule_1_time_mins,
                                  bus_1_from_time,
                                  show_bus_1_from_time,
                                  show_bus_1_to_time,
                                  show_bus_2_from_time,
                                  show_bus_2_to_time,
                                  bus_2_travel_plus_board_mins,
                                  new_route_arr_1,
                                  new_route_arr_2
                              }
                              next_schedule_time_arr.push(next_schedule_time_obj)



                            //}
                          //}
                        //}
                      //}
                      //break
                    }

                  //}
                //}

              //}
            //}
            //sort
            //console.log(next_schedule_time_arr)
            next_schedule_time_arr.sort(function(a, b){
              return a.bus_2_travel_plus_board_mins > b.bus_2_travel_plus_board_mins
            });
            //console.log(next_schedule_time_arr[0])
            final_bus_combo_detail_arr.push(next_schedule_time_arr[0])

            //break
          }
          //console.log(next_schedule_time_arr)
          //console.log(final_bus_combo_detail_arr)

          /*console.log(bus_1 , bus_1_type, route_1, mark_from_1, mark_to_1,
           waypoint, mark_from_2, mark_to_2, bus_2, bus_2_type, route_2,route_1_arr,
           route_2_arr)*/
          this.$store.state.show_p_bar = false

          //sorting function - internal sorting - in bus time
          next_schedule_time_arr.sort(function(a, b){
            return a.next_schedule_1_time_mins > b.next_schedule_1_time_mins;
          });

          let bus_obj = {
            bus_1, bus_2,
            bus_1_type, bus_2_type,
            next_schedule_time_arr,
            final_bus_combo_detail_arr,
            timeTableArr1,
            timeTableArr2,
            mark_from_1,
            mark_from_2,
            mark_to_1,
            mark_to_2
          }
          this.indirect_bus_arr.push(bus_obj)

        })
      })

    }
  },
  //METHODS ends

  computed:{
    ...mapGetters([
      'show_p_bar',
    ]),
    sorted_indirect_bus_arr: function() {
      function compare(bus1, bus2) {
        if (bus1.next_schedule_time_arr[0].final_travel_time_mins <
          bus2.next_schedule_time_arr[0].final_travel_time_mins)
          return -1;
        if (bus1.next_schedule_time_arr[0].final_travel_time_mins >
          bus2.next_schedule_time_arr[0].final_travel_time_mins)
          return 1;
        return 0;
      }

      return this.indirect_bus_arr.sort(compare);
    }
  },
  //COMPUTED ends

  mounted(){
    this.get_indirect_routes()
  }
  //MOUNTED ends
}
</script>

<style scoped>
#parent {
  display: flex;
}
#left {
  /*flex-grow: 1;*/
}
#right {
  /*flex-grow: 5;*/
  overflow: auto;
}
#right div {

}
.timeline {
  list-style: none;
  padding: 20px 0 20px;
  position: relative;
}

.timeline:before {
  top: 40px;
  bottom: 90px;
  position: absolute;
  content: " ";
  width: 2px;
  background-color: #eeeeee;
  left: 50%;
  margin-left: -10.5px;
}

.timeline > li {
  margin-bottom: 0px;
  position: relative;
}

.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}

.timeline > li:after {
  clear: both;
}

.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}

.timeline > li:after {
  clear: both;
}

.timeline > li > .timeline-panel {
  width: 46%;
  float: left;
  /*border: 1px solid #d4d4d4;*/
  border-radius: 2px;
  padding: 20px;
  position: relative;
  /* -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
   box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);*/
}

.timeline > li > .timeline-panel:before {
  position: absolute;
  top: 13px;
  right: -15px;
  display: inline-block;
  /* border-top: 15px solid transparent;
   border-left: 15px solid #ccc;
   border-right: 0 solid #ccc;
   border-bottom: 15px solid transparent;*/
  content: " ";
}

.timeline > li > .timeline-panel:after {
  position: absolute;
  top: 13px;
  right: -14px;
  display: inline-block;
  /*  border-top: 14px solid transparent;
    border-left: 14px solid #fff;
    border-right: 0 solid #fff;
    border-bottom: 14px solid transparent;*/
  content: " ";
}

.timeline > li > .timeline-badge {
  color: #fff;
  width: 17px;
  height: 17px;
  line-height: 50px;
  font-size: 1.4em;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 50%;
  margin-left: -25px;
  background-color: #99999;
  z-index: 0;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
}

.timeline > li.timeline-inverted > .timeline-panel {
  float: left;
  margin-top: -5px;
  margin-right: -35px;
}

.timeline > li.timeline-inverted > .timeline-panel:before {
  border-left-width: 0;
  border-right-width: 15px;
  left: -15px;
  right: auto;
}

.timeline > li.timeline-inverted > .timeline-panel:after {
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
}

.timeline-badge.primary {
  background-color: #2e6da4 !important;
}

.timeline-badge.success {
  background-color: #9E9E9E !important;
}

.timeline-badge.success2 {
  background-color: rgba(121, 85, 72, 0.70)  !important;
}

.timeline-badge.warning {
  background-color: #f0ad4e !important;
}

.timeline-badge.danger {
  background-color: #d9534f !important;
}

.timeline-badge.info {
  background-color: #5bc0de !important;
}

.timeline-title {
  margin-top: 0;
  color: inherit;
}

.timeline-body > p,
.timeline-body > ul {
  margin-bottom: 0;
}

.timeline-body > p + p {
  margin-top: 5px;
}

@media (max-width: 767px) {
  ul.timeline:before {
    left: 40px;
  }

  ul.timeline > li > .timeline-panel {
    width: calc(100% - 90px);
    width: -moz-calc(100% - 90px);
    width: -webkit-calc(100% - 90px);
  }

  ul.timeline > li > .timeline-badge {
    left: 22px;
    margin-left: 0;
    top: 16px;
  }

  ul.timeline > li > .timeline-panel {
    float: left;
  /* margin-left:50px;*/
  }

  ul.timeline > li > .timeline-panel:before {
    border-left-width: 0;
    border-right-width: 15px;
    left: -15px;
    right: auto;
  }

  ul.timeline > li > .timeline-panel:after {
    border-left-width: 0;
    border-right-width: 14px;
    left: -14px;
    right: auto;
  }
}

@media (min-width: 767px) {
  ul.timeline:before {
    left: 33px;
  }

  ul.timeline > li > .timeline-panel {
    width: calc(100% - 90px);
    width: -moz-calc(100% - 90px);
    width: -webkit-calc(100% - 90px);
  }

  ul.timeline > li > .timeline-badge {
    left: 15px;
    margin-left: 0;
    top: 16px;
  }

  ul.timeline > li > .timeline-panel {
    float: left;
  }

  ul.timeline > li > .timeline-panel:before {
    border-left-width: 0;
    border-right-width: 15px;
    left: -15px;
    right: auto;
  }

  ul.timeline > li > .timeline-panel:after {
    border-left-width: 0;
    border-right-width: 14px;
    left: -14px;
    right: auto;
  }
}
.card__text {
    padding: 0px;
    width: 100%;
}
body {
    font-family: Roboto,sans-serif;
     line-height: 0;
}

.chip {
margin: 3px 10px;
  height: 32px;
}
.p1 {
   margin: 0;
   padding: 0 0px;
   border-radius: 0px;
   /*width: 10em;*/
   white-space: nowrap;
   color: black;
   cursor: pointer;

   }

.c1 {
  position: relative;
  z-index: 0;
  list-style: none;
  margin: 0;
  padding: 0px;
/*  overflow-y: scroll;*/
  overflow-x: scroll;
  }

  .application>main>.container {

    padding-left: 0vh;
	padding-right: 0vh;
	padding-top: 10vh;
}
.layout.child-flex>*, .layout.flex, .layout .flex{

}
.chip[data-v-5fe72661] {

    width: 92%;

}
.elevation-5{
  height:30px;
  font-size:12px;
}

.expansion-panel__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    cursor: pointer;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: 48px;
    position: relative;
    padding: 0 10px ! important;
}

  /** new paint **/

</style>
