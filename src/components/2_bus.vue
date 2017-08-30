<template>
  <v-app style="background:#fff">



    <v-navigation-drawer
      style=""
      temporary
      v-model="drawer"
      :mini-variant.sync="mini"
      light
      overflow
      absolute
    >
      <v-list class="pa-0">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              RSRTC
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider ></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar fixed class="aliceblue" dark  style="  background:#fff " >
      <v-toolbar-side-icon  style="flaot:left;;    color: grey;" @click.stop="drawer = !drawer" ></v-toolbar-side-icon>



      <div id="shwsource" style="margin-top:0px;color:#616a6b" v-ripple >
		<span @click="click_source">
		<i style="font-size:2vh!important;margin-top:-2px"class="material-icons md-18 green--text">&#xE061;</i>
		{{from_city.name}}
			<br>
		<span style="font-size:9px;color:grey;float:right;margin-top:-5px">Change City</span>
		</span>
	  </div>

	  <p id="arrow" style="margin-top:15px;color:grey">  <i class="material-icons">keyboard_arrow_right</i></p>


      <div id="shwsource" style="margin-top:0px;color:#616a6b" v-ripple>
		<span @click="click_dest">
		<i style="font-size:2vh!important;margin-top:-2px" class="material-icons md-18 red--text">&#xE061;</i>
			{{to_city.name}}
			<br>
		<span style="font-size:9px;color:grey;float:right;margin-top:-5px;">Change City</span>
		</span>
	  </div>

	  <v-spacer></v-spacer>
      <div class="black--text"  @click="swap_from_to" style="cursor:pointer;    color: grey;" v-ripple>  <i class="material-icons">swap_vert</i></div>


	</v-toolbar>



   <main  style="padding:0px">
  <v-container fluid >

  <div class="preloader" v-if="show_p_bar" style="margin-top:-5px"></div>
    <v-expansion-panel >
      <v-expansion-panel-content v-for="(bus,k1) in sorted_bus_arr" :key="k1" style="width:100%;">

        <div slot="header" @click="detail=true; timetable=false;" style="width:100%;" v-ripple>

        <!-- Bus icon by Icons8 -->

      <img class="icon icons8-Bus" width="28" height="24" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC/ElEQVRoQ+1ZS0wTURQ909qPFixVoiEpIhIhJhh1QbpRoGqXGBN1gav6WbkxrjTRaE000ZV7o1Jjggs1UVm4qLGAbogLJbgBUxHFIBEsiNV+pM/p0KmltPPpex0tzls1M+/ce84798570+FQ5oMrc/7QBfxtB2UdIEFUgTN3geP2a0qWkIcg8SOcGzNSeeUF9FqCfKG1a0o+k4w84trikgsnL6DPQlLxzj7uwP3guCY6DrqduLyvR8jFtcUkOSoW0HRqhybkxSTD116VRkDrvVHFQvoP1QtzczHidalAugBxdUi6B5ZNCSmuH8qJzEvIPzFESUkd3FuzlW0T6wLUGQDdgdyn0LIqoalwDF/D0bxFscZhRbXDkveeGhx1CZE+s48/iVxYYELgn3iTITXyblayohs32fPeV4Pz1jSnTkLpOOQif6jj+SwdBc9C4gYmQrJLSA2R7JRqcKIDIr7QoU4XkM9WqRIa//QNnyfn8D2SEKAVNhPWr6tArdOObNw/50AsNo8HPcMZ4rnCU0IOdDTBYjEKtxgIYNvEwRcf8DYUhs1mRn1dFarXrhKITk3/wOjYDCKRODY3OODeuSEtgLKJc/eBJ9O3MBlvES6raUYxzvXbg8JPV4sTK60rFhnwM/oLAy/HYTYb4e1sRq31GfY4TgpzmL2RxZOVeD57CR+ju4sS0NU9hEQiKSnAZDLg/NEv2GU/B7Nhjq2AfM2qxTVmDmhBNl8OXUDujqy1E2wdMFYCDVcAhwcIB4DQGWB+odmKHjIx2QrYcgdY7frDNfyUf6aeKJq7AJSJyVaAa2Qp2YFGOgEyMdkKKHsHhHq9yvfAXr4H+PIJnWbUA4VjsnWArliKQusCSK/lPf9mV1fU8tGCCMa49thGqTDyf6/3m7xIGnyai+DJw5D0ca0JP5UAEew5fFz40JE7At03ZBdBigBtXMXJaRMVEkEb9z8S0HnsNf+lctuilSRkMHD35naaXvVQxlXsAA3JUmJ1AaVcXSWxdQeUrFIp5/wG5XWsQAI+GqoAAAAASUVORK5CYII=">

		  <span style="font-size:18px;font-weight:400">
			<span v-for="(no,i) in bus.bus_no" >
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


		  <span style="font-size:8px">{{bus.bus_type}}</span>
          <br>

          <span style="color:rgba(30, 105, 98, 0.73)">
            <i class="material-icons" style=" transform: scaleX(-1);font-size:14px">&#xE15E;</i>
            <span style="font-weight:600;font-size:14px">{{bus.next_schedule_time_arr[0].next_schedule}}</span>
          </span>

          <span style="float:right;margin-right:10px;color:#616a6b">
            <i class="material-icons" style="font-size:14px;margin-right:-1px;">&#xE8B5;</i>
            <span style=";font-size:14px">{{bus.next_schedule_time_arr[0].travel_time}}</span>
          </span>
		<v-divider style="margin-left: 0vh;"></v-divider>
        </div>


        <v-card >
          <v-card-text class="grey lighten-3">

          <!--detail starts -->
          <div v-show="detail" style="background:#fff">



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
            <li v-for="(city,i) in bus.new_route_arr" class="timeline-inverted">
              <div class="timeline-badge success"></div>
              <div class="timeline-panel"  style="width: 100%">
               <div class="timeline-body" style="margin-left: 50px">
                 <p style="color:rgba(96, 125, 139, 0.87)"><span v-if="i==0" >
                   <i class="material-icons" style="font-size:14px;color:rgba(0, 128, 0, 0.71)" >&#xE55F;</i> {{city}}
                   <br>
                   <span style="margin-left:-6px">
                    <!-- Bus icon by Icons8 -->
                    <img class="icon icons8-Bus" width="22" height="18" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC/ElEQVRoQ+1ZS0wTURQ909qPFixVoiEpIhIhJhh1QbpRoGqXGBN1gav6WbkxrjTRaE000ZV7o1Jjggs1UVm4qLGAbogLJbgBUxHFIBEsiNV+pM/p0KmltPPpex0tzls1M+/ce84798570+FQ5oMrc/7QBfxtB2UdIEFUgTN3geP2a0qWkIcg8SOcGzNSeeUF9FqCfKG1a0o+k4w84trikgsnL6DPQlLxzj7uwP3guCY6DrqduLyvR8jFtcUkOSoW0HRqhybkxSTD116VRkDrvVHFQvoP1QtzczHidalAugBxdUi6B5ZNCSmuH8qJzEvIPzFESUkd3FuzlW0T6wLUGQDdgdyn0LIqoalwDF/D0bxFscZhRbXDkveeGhx1CZE+s48/iVxYYELgn3iTITXyblayohs32fPeV4Pz1jSnTkLpOOQif6jj+SwdBc9C4gYmQrJLSA2R7JRqcKIDIr7QoU4XkM9WqRIa//QNnyfn8D2SEKAVNhPWr6tArdOObNw/50AsNo8HPcMZ4rnCU0IOdDTBYjEKtxgIYNvEwRcf8DYUhs1mRn1dFarXrhKITk3/wOjYDCKRODY3OODeuSEtgLKJc/eBJ9O3MBlvES6raUYxzvXbg8JPV4sTK60rFhnwM/oLAy/HYTYb4e1sRq31GfY4TgpzmL2RxZOVeD57CR+ju4sS0NU9hEQiKSnAZDLg/NEv2GU/B7Nhjq2AfM2qxTVmDmhBNl8OXUDujqy1E2wdMFYCDVcAhwcIB4DQGWB+odmKHjIx2QrYcgdY7frDNfyUf6aeKJq7AJSJyVaAa2Qp2YFGOgEyMdkKKHsHhHq9yvfAXr4H+PIJnWbUA4VjsnWArliKQusCSK/lPf9mV1fU8tGCCMa49thGqTDyf6/3m7xIGnyai+DJw5D0ca0JP5UAEew5fFz40JE7At03ZBdBigBtXMXJaRMVEkEb9z8S0HnsNf+lctuilSRkMHD35naaXvVQxlXsAA3JUmJ1AaVcXSWxdQeUrFIp5/wG5XWsQAI+GqoAAAAASUVORK5CYII=">
                     <span style="font-size:18px;font-weight:400">
                      <span v-for="(no,i) in bus.bus_no" >
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

                     <span style="font-size:8px">{{bus.bus_type}}</span>
                   </span>
                   <br>
                   <i class="material-icons" style=" transform: scaleX(-1);font-size:14px;color:#616a6b">&#xE15E;</i>
                   <span v-for="(time,t) in bus.next_schedule_time_arr">
                     <span v-if="t<=2">
                        <v-chip style="    background: #fff;height: 26px;padding:0 10px;">{{time.next_schedule}}</v-chip>
                     </span>
                   </span>
                   <br>

				   <v-btn outline class="grey #eeeeee--text" @click="detail=false; timetable=true;" style="height: auto;" >
						<i class="material-icons" style="font-size:10px;margin-top:6px">&#xE8B5;</i>
						<span style="font-size:10px;"> TIMETABLE </span>
						<i class="material-icons" style="font-size:12px;margin-top:6px">&#xE315;</i>
					</v-btn>

                 </span>
                 <span v-else-if="i==bus.new_route_arr.length-1" style="">
                   <i class="material-icons" style="font-size:14px;color:rgba(255, 0, 0, 0.68)">&#xE55F;</i> {{city}}
                   <br>
                   <span style="color:#616a6b">@</span>
                   <span v-for="(time,t) in bus.next_schedule_time_arr">
                     <span v-if="t<=2">
                       <v-chip style="    background: #fff;height: 26px;padding:0 10px;">
                         {{time.next_schedule_to}}
                       </v-chip>
                     </span>
                   </span>
                 </span>
                 <span v-else>
                   <i class="material-icons" style="font-size:14px;">&#xE55F;</i> {{city}}
                 </span></p>
               </div>
              </div>
            </li>
           </ul>
          </div>

          </div>
          <!--details ends -->

          <!-- timetable starts-->

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




            <v-layout row wrap id="parent">
            <v-flex xs5 class="child" id ="left" >
			<span style="float:right">
            <tr v-for="(city,i) in bus.new_route_arr" >
              <span v-if="i==0">
                <v-chip label outline class="#eeeeee black--text elevation-5" style="width:90%;margin-left:10%;height:30px" >
                  <i class="material-icons" style="font-size:13px;
                    color:rgba(66, 119, 66, 0.88);margin-top: 8px;">&#xE3FA;</i>
                  <span style="font-size:12px;">{{city}}</span>
                </v-chip>

                <v-chip label outline class="#eeeeee black--text elevation-5" style="width:90%;margin-left:10%;height:30px">
                  <!-- Bus icon by Icons8 -->
                   <img class="icon icons8-Bus" width="20" height="15" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC/ElEQVRoQ+1ZS0wTURQ909qPFixVoiEpIhIhJhh1QbpRoGqXGBN1gav6WbkxrjTRaE000ZV7o1Jjggs1UVm4qLGAbogLJbgBUxHFIBEsiNV+pM/p0KmltPPpex0tzls1M+/ce84798570+FQ5oMrc/7QBfxtB2UdIEFUgTN3geP2a0qWkIcg8SOcGzNSeeUF9FqCfKG1a0o+k4w84trikgsnL6DPQlLxzj7uwP3guCY6DrqduLyvR8jFtcUkOSoW0HRqhybkxSTD116VRkDrvVHFQvoP1QtzczHidalAugBxdUi6B5ZNCSmuH8qJzEvIPzFESUkd3FuzlW0T6wLUGQDdgdyn0LIqoalwDF/D0bxFscZhRbXDkveeGhx1CZE+s48/iVxYYELgn3iTITXyblayohs32fPeV4Pz1jSnTkLpOOQif6jj+SwdBc9C4gYmQrJLSA2R7JRqcKIDIr7QoU4XkM9WqRIa//QNnyfn8D2SEKAVNhPWr6tArdOObNw/50AsNo8HPcMZ4rnCU0IOdDTBYjEKtxgIYNvEwRcf8DYUhs1mRn1dFarXrhKITk3/wOjYDCKRODY3OODeuSEtgLKJc/eBJ9O3MBlvES6raUYxzvXbg8JPV4sTK60rFhnwM/oLAy/HYTYb4e1sRq31GfY4TgpzmL2RxZOVeD57CR+ju4sS0NU9hEQiKSnAZDLg/NEv2GU/B7Nhjq2AfM2qxTVmDmhBNl8OXUDujqy1E2wdMFYCDVcAhwcIB4DQGWB+odmKHjIx2QrYcgdY7frDNfyUf6aeKJq7AJSJyVaAa2Qp2YFGOgEyMdkKKHsHhHq9yvfAXr4H+PIJnWbUA4VjsnWArliKQusCSK/lPf9mV1fU8tGCCMa49thGqTDyf6/3m7xIGnyai+DJw5D0ca0JP5UAEew5fFz40JE7At03ZBdBigBtXMXJaRMVEkEb9z8S0HnsNf+lctuilSRkMHD35naaXvVQxlXsAA3JUmJ1AaVcXSWxdQeUrFIp5/wG5XWsQAI+GqoAAAAASUVORK5CYII=" style="">
                     <span style="font-size:18px;font-weight:400">
                      <span v-for="(no,i) in bus.bus_no" >
                        <span v-if="i ==4" style="margin-left:0px;font-size:15px;visibility:hidden" >
                          j
                        </span>
                        <span v-if="i <=3" style="margin-left:-2px;font-size:11px;color:grey">
                          {{no}}
                        </span >
                        <span v-else-if="i >3 && i<=8" style="margin-left:-4px;font-size:16px;font-weight:600;color:rgba(83, 136, 85, 0.84)">
                          {{no}}
                        </span >
                        <span v-else-if="i >8" style="margin-left:-2px;font-size:11px;color:grey">
                          {{no}}
                        </span >
                      </span>
                    </span>
                </v-chip>
              </span>
              <span v-else-if="i==bus.new_route_arr.length-1" >
              <v-chip label outline class="#eeeeee black--text elevation-5" style="width:90%;margin-left:10%;height:30px">
                <i class="material-icons" style="font-size:13px;
                  color:rgba(189, 48, 48, 0.93);margin-top: 8px;">&#xE3FA;</i>
                 <span style="font-size:12px;">{{city}}</span>
              </v-chip>
              </span>
              <span v-else>
                <v-chip label outline class="#eeeeee grey--text elevation-5" style="width:90%;margin-left:10%;height:30px">
                  <i class="material-icons" style="font-size:13px;
                     color:rgba(212, 212, 212, 0.78);margin-top: 8px;">&#xE3FA;</i>
                  <span style="font-size:12px;">{{city}}</span>
                </v-chip>
              </span>
            </tr>
			</span>
            </v-flex>



            <v-flex xs7 class="child" id ="right" >
            <td v-for="(timetableX,j) in bus.timeTableArr" >
              <tr v-for="(time,k) in bus.timeTableArr[j]">
                <span v-if="k==bus.mark_from">
                  <v-chip label outline class="#eeeeee black--text elevation-5" style="width:90%;height:30px" v-if="time.length==4">
                    <span style="font-size:12px;">0{{time}}</span>
                  </v-chip>
                  <v-chip label outline class="#eeeeee black--text elevation-5" style="width:90%;height:30px" v-else>
                    <span style="font-size:12px;">{{time}}</span>
                  </v-chip>
                  <v-chip label outline class="#eeeeee black--text " style="visibility:hidden;height:30px">
                    junk
                  </v-chip>
                </span>
                <span v-else-if="k == bus.mark_to">
                  <v-chip label outline class="#eeeeee black--text elevation-5" style="width:90%;height:30px" v-if="time.length==4">
                    <span style="font-size:12px;">0{{time}}</span>
                  </v-chip>
                  <v-chip label outline class="#eeeeee black--text elevation-5" style="width:90%;height:30px" v-else>
                    <span style="font-size:12px;">{{time}}</span>
                  </v-chip>
                </span>
                <span v-else-if="k > bus.mark_from && k <= bus.mark_to">
                  <v-chip label outline class="#eeeeee grey--text elevation-5" style="width:90%;height:30px" v-if="time.length==4">
                      <span style="font-size:12px;">0{{time}}</span>
                  </v-chip>
                  <v-chip label outline class="#eeeeee grey--text elevation-5" style="width:90%;height:30px" v-else>
                    <span style="font-size:12px;">0{{time}}</span>
                  </v-chip>
                </span>
              </tr>
            </td>
            </v-flex>
            </v-layout>
            <!--ends timetable -->

          </div>

          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

	<div style="margin-top:1.7px">
		<two_bus_combo></two_bus_combo>
	</div>
  </v-container>
 </main>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'
import two_bus_combo from './2.1_two_bus_combo'

export default{
  data(){
    return{
      bus_arr : [],
      direct_bus_status : '',
      dialogm1: '',
      dialog: false,
      detail : true,
      timetable : false ,

      drawer: null,
          items: [
            { title: 'About', icon: 'question_answer' }
          ],
          mini: false,
          right: null
    }
  },

  methods:{

    click_source(){
      this.$store.state.flg = true
      localStorage.setItem('redirect_flg',JSON.stringify(this.$store.state.flg))
      this.$router.push('/')
    },
    click_dest(){
      this.$router.push('/to_city')
    },
    swap_from_to(){
      let temp_city_name = ''
      temp_city_name = this.$store.state.from_city.name
      this.$store.state.from_city.name = this.$store.state.to_city.name
      this.$store.state.to_city.name = temp_city_name
      this.$router.push('/redirect')
    },

    checkDirect(){ //get routes
      this.$store.state.show_p_bar = true
      //this.$Progress.start()

      this.$store.state.direct_bus_route_str = ''
      this.direct_bus_status = ''

      let from_city = this.$store.state.from_city
      let to_city = this.$store.state.to_city

      //source-dest same
      if(from_city.name == to_city.name){
        //console.log("You Just Selected Same Source & Destination !") //snackbar
        this.$store.state.show_p_bar = false
      }

      this.$http.get('city_route_matrix/'+from_city.name+'/'+to_city.name+'.json')
      .then(response=>{
        let routes = response.body
        if(response.body != null){ //isDirect
          //console.log(routes)
          this.get_bus(routes) //got direct routes

          return response.json()
        }else{ //notDirect
          this.direct_bus_status = "No Direct Bus Found on this Route" //snackbar //bkc
        //  this.$Progress.finish()
        //this.$store.state.show_p_bar = false
        }
      })
    },
    //CHECK DIRECT end

    get_bus(routes){

      for(let route in routes){
        this.$store.state.direct_bus_route_str += "*"+routes[route]+"*"
        this.$http.get('buses_on_route/'+routes[route]+'.json')
        .then(response=>{
          let buses = response.body
          //console.log(buses)
          this.get_bus_type(routes[route],buses) // call bus_type

          return response.json()
        })
      }
    },
    //GET BUS ends


    get_bus_type(route, buses){
      for(let bus in buses){
        this.$http.get('bus_type/'+buses[bus]+'.json')
        .then(response=>{
          let bus_type=response.body
          //console.log(bus_type)
          this.mark_cities(buses[bus], bus_type, route) //call travel_time

          return response.json()
        })
      }
    },
    //GET_BUS_TYPE ends

    mark_cities(bus_no, bus_type, route){
      this.$http.get('bus_routes/'+route+'.json')
      .then(response=>{
       let cities = response.body
       //console.log(cities)
       let mark_from = -1 , mark_to = -1
       for(let city in cities){
        //mark_from
        if(cities[city] == this.$store.state.from_city.name){
          mark_from = city
          //console.log(mark_from)
        }
        //mark_to
        else if(cities[city] == this.$store.state.to_city.name){
          mark_to = city
          //console.log(mark_to)
        }
        //if got => both marked points => proceed
        if(mark_from != -1 && mark_to != -1){
          //call get_travel_time



          this.get_next_schedule(bus_no , bus_type, route, mark_from, mark_to,
            cities)
          break
        }
       }

       return response.json()
      })
    },
    //MARK CITIES ends

    get_next_schedule(bus_no , bus_type, route, mark_from, mark_to, route_arr){


      //latest_time
      //console.log(moment().format("HH:mm"))
      let current_time = moment.utc(moment().format("HH:mm"),"HH:mm")
      //console.log(current_time)
      //console.log(moment(current_time, 'HH:mm',true).isValid())

      this.$http.get('bus_timetable/'+bus_no+'.json')
      .then(response=>{
        //console.log(response.body)
        let timeTableArr=response.body
        let bus_is_today = false
        let bus_from_time , bus_to_time
        let next_schedule , next_schedule_to
        let next_schedule_arr=[] , next_schedule_to_arr=[]
        let next_schedule_time , next_schedule_time_arr = [] , next_schedule_time_mins
        let travel_time = '' , travel_time_mins = 0 , travel_time_mins_arr =[]
        let c= 0
        let new_travel_time_mins = 0
        for(let timeTableX in timeTableArr){
          //console.log(timeTableArr[timeTableX])
          //for(let time in timeTableArr[timeTableX]){
            //if(mark_from == time){



              //console.log(timeTableArr[timeTableX][mark_from]) //got from_time_bus
              bus_from_time = moment.utc(timeTableArr[timeTableX][mark_from],"HH:mm")
              //console.log(moment(bus_from_time, 'HH:mm',true).isValid())

              //compare
              //console.log(current_time.isBefore(bus_from_time))
              let f = false
              if(!current_time.isBefore(bus_from_time)){//{ //if today any time of bus matches
                bus_from_time.add(1, 'day')
                f = true
              }

                //bus_is_today = true
                //show next schedule
                next_schedule =  timeTableArr[timeTableX][mark_from]


                //check to_time
                //for(let time_to=time ; time_to <timeTableArr[timeTableX].length ;
                  //time_to++){
                  //if(mark_to == time_to){
                    //console.log("to_time->"+timeTableArr[timeTableX][time_to])
                    bus_to_time = moment.utc(timeTableArr[timeTableX][mark_to],"HH:mm")
                    if(f)
                      bus_to_time.add(1, 'day')
                    //console.log(bus_to_time)
                    next_schedule_to = timeTableArr[timeTableX][mark_to]
                    next_schedule_arr.push(next_schedule)
                    next_schedule_to_arr.push(next_schedule_to)
                    c++
                    //console.log(c)

                    //calculate next_schedule - current_time
                    next_schedule_time = moment.duration(bus_from_time.diff(current_time))
                    //console.log(next_schedule_time)
                    //next_schedule_time_arr.push(next_schedule_time)

                    //next_schedule_time_mins
                    let next_schedule_time_mins = moment.duration(next_schedule_time).asMinutes();



                    //calculate - travel_time
                    if (bus_to_time.isBefore(bus_from_time)) // account for crossing over to midnight the next day
                      bus_to_time.add(1, 'day')


                    // calculate the duration
                    travel_time = moment.duration(bus_to_time.diff(bus_from_time));
                    travel_time_mins = moment.duration(travel_time).asMinutes();
                    //travel_time_mins_arr.push(travel_time_mins)

                    //next_schedule_time + travel_time_mins
                    new_travel_time_mins = next_schedule_time_mins + travel_time_mins
                    //new_travel_time_mins is time to board + travel dist






                    //console.log(travel_time_mins)
                    //format the string output
                    let travel_time_hr = moment.utc(+travel_time).format('H');
                    let travel_time_min = moment.utc(+travel_time).format('mm');

                    //manipulate_to_show_on_dom
                    if(travel_time_hr == 0)
                      travel_time = travel_time_min + " min "
                    else if(travel_time_min == 0)
                      travel_time = travel_time_hr+ " hr "
                    else
                      travel_time = travel_time_hr+ " hr "+travel_time_min + " min "


                      let next_schedule_time_obj = {
                        new_travel_time_mins,
                        next_schedule,
                        next_schedule_to,
                        travel_time_mins,
                        travel_time,
                        next_schedule_time_mins
                      }
                      next_schedule_time_arr.push(next_schedule_time_obj)

                  //}
                //}

              //}

            //}

          //}
          if(c>=3){
            //console.log("why the funck")
            //break
          }
        }
        //console.log(next_schedule_time_arr)
        next_schedule_time_arr.sort(function(a, b){
          return a.next_schedule_time_mins > b.next_schedule_time_mins;
        });
        //console.log(next_schedule_time_arr)

        //route extract
        let new_route_arr = []
        for(let city=mark_from ; city <= mark_to ; city++){
          new_route_arr.push(route_arr[city])
        }
        //console.log(new_route_arr)

        //Print
        //console.log(bus_no , bus_type, route, mark_from, mark_to , next_schedule, next_schedule_to)

        let bus_obj = {
            bus_no,
            bus_type,
            next_schedule,
            next_schedule_to,
            travel_time,
            travel_time_mins,
            new_route_arr,
            timeTableArr,
            mark_from,
            mark_to,
            next_schedule_arr,
            next_schedule_to_arr,
            next_schedule_time_arr
        }
        this.bus_arr.push(bus_obj)
        this.$store.state.show_p_bar = false

        //console.log(next_schedule_arr+ " " +next_schedule_to_arr)

      })

    }
    //GET_TRAVEL_TIME ends

  },
  //METHODS ends

  computed:{
    ...mapGetters([
      'from_city','to_city','show_p_bar'
    ]),
    sorted_bus_arr: function() {
      function compare(bus1, bus2) {
        if (bus1.next_schedule_time_arr[0].travel_time_mins <
          bus2.next_schedule_time_arr[0].travel_time_mins)
          return -1;
        if (bus1.next_schedule_time_arr[0].travel_time_mins >
          bus2.next_schedule_time_arr[0].travel_time_mins)
          return 1;
        return 0;
      }

      return this.bus_arr.sort(compare);
    }
  },
  //COMPUTED ends

  beforeMount(){
    this.checkDirect()
  },
  //BEFORE_MOUNT ends

  components:{
    'two_bus_combo' : two_bus_combo
  },
  //COMPONENTS ends

  mounted(){

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
            margin-right: -50px;
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
  margin:3px;
  height: 32px;
}

p{
  color:#000
}

.application>main>.container {

    padding-left: 0vh;
	padding-right: 0vh;
	padding-top: 10vh;
}
body{
	 font-family: 'Cutive' ! important;
}

.expansion-panel__header {
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  cursor: pointer;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: auto;
  position: relative;
  padding-left: 1rem;
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

</style>
