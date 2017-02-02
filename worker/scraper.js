/**
 * Created by ereye on 11/26/2016.
 */
var Teams = require ('../models/scrapper_model.js').Team;
var gameday = require('gameday-helper');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
//Database URL//
var db_url = 'mongodb://localhost:27017/dev-baseball';


exports.getTeams = function (msg) {
    var Team = Teams(msg);
    MongoClient.connect(db_url, function (err, db) {
        console.log('Connecting Successful');
        var col = db.collection('teams');
        col.find({MLB_id: Team.MLB_id}).toArray(function (err, result) {
            if (result[0] == null || result[0].MLB_id != Team.MLB_id) {
                col.insertOne(Team);
                db.close();
                console.log("Connection Closed")
                console.log(Team)

            }
            else {
                db.close();
                console.log("Connection Closed")
                console.log(result)
            }

        })

    })

};




























//
// //Unit Test//
 var g = { "game":{"home_team_runs":"3","preview_link":"/mlb/gameday/index.jsp?gid=2015_07_14_aasmlb_nasmlb_1&mode=preview&c_id=mlb","game_type":"A","double_header_sw":"N","location":"Cincinnati, OH","away_time":"7:00","away_preview_link":"/mlb/gameday/index.jsp?gid=2015_07_14_aasmlb_nasmlb_1&mode=preview&c_id=mlb","away_audio_link":"bam.media.launchPlayer({calendar_event_id:'14-414988-2015-07-14',media_type:'audio'})","time":"7:00","top_inning":"N","home_time":"7:00","home_team_sb":"1","home_team_name":"National","away_team_hr":"2","ind":"F","description":"86th All-Star Game, at Great American Ball Park","original_date":"2015/07/14","home_team_city":"NL All-Stars","venue_id":"2602","home_team_so":"15","gameday_sw":"P","away_win":"1","away_team_id":"159","tz_hm_lg_gen":"ET","status":"Final","home_loss":"1","home_code":"nas","away_sport_code":"mlb","home_team_hr":"1","home_win":"0","time_hm_lg":"7:00","away_name_abbrev":"AL","league":"AN","time_zone_aw_lg":"-4","home_file_code":"nl","game_data_directory":"/components/game/mlb/year_2015/month_07/day_14/gid_2015_07_14_aasmlb_nasmlb_1","time_zone":"ET","away_league_id":"103","home_team_id":"179","time_aw_lg":"7:00","away_team_city":"AL All-Stars","day":"TUE","tbd_flag":"N","tz_aw_lg_gen":"ET","away_code":"aas","game_media":{"media":[{"free":"NO","title":"AL @ NL","thumbnail":"http://mediadownloads.mlb.com/mlbam/preview/aasnas_414988_th_7_preview.jpg","media_state":"media_archive","start":"2015-07-14T19:00:00-0400","has_mlbtv":"true","calendar_event_id":"14-414988-2015-07-14","enhanced":"N","type":"game"},{"headline":"Trout's ASG career cycle","thumbnail":"http://mediadownloads.mlb.com/mlbam/2015/07/15/images/mlbf_260129883_th_43.jpg","content_id":"260129883","topic_id":"","type":"vpp"}]},"game_nbr":"1","time_date_aw_lg":"2015/07/14 7:00","away_team_sb":"1","scheduled_innings":"9","venue_w_chan_loc":"USOH0188","first_pitch_et":"7:00","away_team_so":"9","away_team_name":"American","gameday_link":"2015_07_14_aasmlb_nasmlb_1","outs":"3","time_date_hm_lg":"2015/07/14 7:00","id":"2015/07/14/aasmlb-nasmlb-1","home_name_abbrev":"NL","wrapup_link":"/mlb/gameday/index.jsp?gid=2015_07_14_aasmlb_nasmlb_1&mode=wrap&c_id=mlb","tiebreaker_sw":"N","ampm":"PM","home_time_zone":"ET","tv_station":"FOX","away_team_errors":"2","away_team_runs":"6","mlbtv_link":"bam.media.launchPlayer({calendar_event_id:'14-414988-2015-07-14',media_type:'video'})","away_time_zone":"ET","home_audio_link":"bam.media.launchPlayer({calendar_event_id:'14-414988-2015-07-14',media_type:'audio'})","hm_lg_ampm":"PM","home_sport_code":"mlb","time_date":"2015/07/14 7:00","inning":"9","home_team_hits":"6","home_ampm":"PM","game_pk":"414988","venue":"Great American Ball Park","home_league_id":"104","away_team_hits":"7","away_loss":"0","home_team_errors":"0","away_file_code":"al","aw_lg_ampm":"PM","home_preview_link":"/mlb/gameday/index.jsp?gid=2015_07_14_aasmlb_nasmlb_1&mode=preview&c_id=mlb","time_zone_hm_lg":"-4","away_ampm":"PM"},"date":"20150714"}
this.getTeams(g);