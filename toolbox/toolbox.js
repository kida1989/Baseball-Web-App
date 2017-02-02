var moment = require ('moment');
var  exports = module.exports = {};



exports.getDateRange = function (startDate,endDate,dateFormat) {
    var dates= [];
    var end = moment(endDate);
    var start = moment(startDate);
    var diff = end.diff(start,"days");

    if (!start.isValid() || !end.isValid() || diff <= 0){
        return;
    }

    dates.push(start.format(dateFormat));

    for (i=0;i<diff;i++){

        dates.push(start.add(1,'d').format(dateFormat));

    }
    console.log(dates);
    return dates;
};




exports.structureGame = function (data) {
    var games = [];
    if(data.game === undefined){ return;}

    for (var i=0;i<data.game.length;i++){
        var game = {
            'id':data.game[i].id,
            'game_pk':data.game[i].game_pk,
            'league':data.game[i].league,
            'Date':{
                'original_date':data.game[i].original_date,
                'time_date':data.game[i].time_date,
                'day':data.game[i].day,
                'time_date_aw_lg':data.game[i].time_date_aw_lg,
                'time_date_hm_lg':data.game[i].time_date_hm_lg,

            },
            'Time':{

                'time': data.game[i].time,
                'time_zone':data.game[i].time,
                'ampm':data.game[i].ampm,
                'away_time':data.game[i].away_time,
                'home_time':data.game[i].home_time,
                'tz_hm_lg_gen':data.game[i].tz_hm_lg_gen,
                'time_hm_lg':data.game[i].time_hm_lg,
                'time_zone_aw_lg':data.game[i].time_zone_aw_lg,
                'time_aw_lg':data.game[i].time_aw_lg,
                'tz_aw_lg_gen':data.game[i].tz_aw_lg_gen,
                'home_time_zone':data.game[i].home_time_zone,
                'away_time_zone':data.game[i].away_time_zone,
                'hm_lg_ampm':data.game[i].hm_lg_ampm,
                'home_ampm':data.game[i].home_ampm,
                'aw_lg_ampm':data.game[i].aw_lg_ampm,
                'time_zone_hm_lg':data.game[i].time_zone_hm_lg,
                'away_ampm':data.game[i].away_ampm,


            },
            'Game':{
                'id':'gid_'+data.game[i].gameday_link,
                'game_type':data.game[i].game_type,
                'double_header_sw':data.game[i].double_header_sw,
                'game_data_directory':data.game[i].game_data_directory,
                'game_media':data.game[i].game_media,
                'game_nbr':data.game[i].game_nbr,


            },
            'Location':{
                'location':data.game[i].location,
                'Venue':{
                    'venue_id':data.game[i].venue_id,
                    'venue':data.game[i].venue,
                    'venue_w_chan_loc':data.game[i].venue_w_chan_loc,
                }

            },
            'HomeTeam':{
                'Info':{
                    'home_team_id':data.game[i].home_team_id,
                    'home_team_name':data.game[i].home_team_name,
                    'home_name_abbrev':data.game[i].home_name_abbrev,
                    'home_team_city':data.game[i].home_team_city,
                    'home_code':data.game[i].home_code,
                    'home_sport_code':data.game[i].home_sport_code,
                    'home_file_code':data.game[i].home_file_code,
                    'home_league_id':data.game[i].home_league_id,
                    'home_division':data.game[i].home_division,

                },

                'Stats':{

                    'home_team_runs':data.game[i].home_team_runs,
                    'home_team_hr':data.game[i].home_team_hr,
                    'home_team_hits':data.game[i].home_team_hits,
                    'home_team_sb':data.game[i].home_team_sb,
                    'home_team_so':data.game[i].home_team_so,
                    'home_team_errors':data.game[i].home_team_errors,
                    'home_win':data.game[i].home_win,
                    'home_loss':data.game[i].home_loss,
                    'home_games_back':data.game[i].home_games_back,
                    'home_games_back_wildcard':data.game[i].home_games_back_wildcard,




                }

            },
             'AwayTeam':{
                 'Info':{
                     'away_team_id':data.game[i].away_team_id,
                     'away_team_name':data.game[i].away_team_name,
                     'away_name_abbrev':data.game[i].away_name_abbrev,
                     'away_team_city':data.game[i].away_team_city,
                     'away_code':data.game[i].away_code,
                     'away_sport_code':data.game[i].away_sport_code,
                     'away_file_code':data.game[i].away_file_code,
                     'away_league_id':data.game[i].away_league_id,
                     'away_division':data.game[i].away_division,


                 },

                'Stats':{
                    'away_team_runs':data.game[i].away_team_runs,
                    'away_team_hr':data.game[i].away_team_hr,
                    'away_team_hits':data.game[i].away_team_hits,
                    'away_league_id':data.game[i].away_league_id,
                    'away_team_so':data.game[i].away_team_so,
                    'away_team_sb':data.game[i].away_team_sb,
                    'away_team_errors':data.game[i].away_team_errors,
                    'away_win':data.game[i].away_win,
                    'away_loss':data.game[i].away_loss,
                    'away_games_back':data.game[i].away_games_back,
                    'away_games_back_wilcared':data.game[i].away_games_back_wilcared,





                }

            },
            'Status':{
                'status':data.game[i].status,
                'inning':data.game[i].inning,
                'ind':data.game[i].ind,
                'tbd_flag':data.game[i].tbd_flag,
                'scheduled_innings':data.game[i].scheduled_innings,
                'outs':data.game[i].outs,
                'tiebreaker_sw':data.game[i].tiebreaker_sw,
                'top_inning':data.game[i].top_inning,
            },
            'Links':{
                'preview_link': data.game[i].preview_link,
                'home_preview_link':data.game[i].home_preview_link,
                'away_preview_link':data.game[i].away_preview_link,
                'away_audio_link':data.game[i].away_audio_link,
                'wrapup_link':data.game[i].wrapup_link,
                'mlbtv_link':data.game[i].mlbtv_link,
                'home_audio_link':data.game[i].home_audio_link,
            },
            "GameDay":{
                'gameday_link':data.game[i].gameday_link,
                'gameday_sw':data.game[i].gameday_sw,
                'tv_station':data.game[i].tv_station,
            },

        };



        games.push(game);
    }


    return games

    };


exports.iterateOver = function (list,iterator,callback) {
    var doneCounter = 0;

    function report() {
        doneCounter++;

        if (doneCounter === list.length) {
            callback();
        }
    }

    for (var i=0; i < list.length; i++){

        iterator(list[i], report)



        }
};







