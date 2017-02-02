function Game(data) {
    return {
            'id': data.game.id,
            'game_pk': data.game.game_pk,
            'league': data.game.league,
            'Date': {
                'original_date': data.game.original_date,
                'time_date': data.game.time_date,
                'day': data.game.day,
                'time_date_aw_lg': data.game.time_date_aw_lg,
                'time_date_hm_lg': data.game.time_date_hm_lg,

            },
            'Time': {

                'time': data.game.time,
                'time_zone': data.game.time,
                'ampm': data.game.ampm,
                'away_time': data.game.away_time,
                'home_time': data.game.home_time,
                'tz_hm_lg_gen': data.game.tz_hm_lg_gen,
                'time_hm_lg': data.game.time_hm_lg,
                'time_zone_aw_lg': data.game.time_zone_aw_lg,
                'time_aw_lg': data.game.time_aw_lg,
                'tz_aw_lg_gen': data.game.tz_aw_lg_gen,
                'home_time_zone': data.game.home_time_zone,
                'away_time_zone': data.game.away_time_zone,
                'hm_lg_ampm': data.game.hm_lg_ampm,
                'home_ampm': data.game.home_ampm,
                'aw_lg_ampm': data.game.aw_lg_ampm,
                'time_zone_hm_lg': data.game.time_zone_hm_lg,
                'away_ampm': data.game.away_ampm,

            },
            'Game': {
                'id': 'gid_' + data.game.gameday_link,
                'game_type': data.game.game_type,
                'double_header_sw': data.game.double_header_sw,
                'game_data_directory': data.game.game_data_directory,
                'game_media': data.game.game_media,
                'game_nbr': data.game.game_nbr,

            },
            'Location': {
                'location': data.game.location,
                'Venue': {
                    'venue_id': data.game.venue_id,
                    'venue': data.game.venue,
                    'venue_w_chan_loc': data.game.venue_w_chan_loc,
                }

            },
            'HomeTeam': {
                'Info': {
                    'home_team_id': data.game.home_team_id,
                    'home_team_name': data.game.home_team_name,
                    'home_name_abbrev': data.game.home_name_abbrev,
                    'home_team_city': data.game.home_team_city,
                    'home_code': data.game.home_code,
                    'home_sport_code': data.game.home_sport_code,
                    'home_file_code': data.game.home_file_code,
                    'home_league_id': data.game.home_league_id,
                    'home_division': data.game.home_division,

                },

                'Stats': {

                    'home_team_runs': data.game.home_team_runs,
                    'home_team_hr': data.game.home_team_hr,
                    'home_team_hits': data.game.home_team_hits,
                    'home_team_sb': data.game.home_team_sb,
                    'home_team_so': data.game.home_team_so,
                    'home_team_errors': data.game.home_team_errors,
                    'home_win': data.game.home_win,
                    'home_loss': data.game.home_loss,
                    'home_games_back': data.game.home_games_back,
                    'home_games_back_wildcard': data.game.home_games_back_wildcard,


                }

            },
            'AwayTeam': {
                'Info': {
                    'away_team_id': data.game.away_team_id,
                    'away_team_name': data.game.away_team_name,
                    'away_name_abbrev': data.game.away_name_abbrev,
                    'away_team_city': data.game.away_team_city,
                    'away_code': data.game.away_code,
                    'away_sport_code': data.game.away_sport_code,
                    'away_file_code': data.game.away_file_code,
                    'away_league_id': data.game.away_league_id,
                    'away_division': data.game.away_division,


                },

                'Stats': {
                    'away_team_runs': data.game.away_team_runs,
                    'away_team_hr': data.game.away_team_hr,
                    'away_team_hits': data.game.away_team_hits,
                    'away_league_id': data.game.away_league_id,
                    'away_team_so': data.game.away_team_so,
                    'away_team_sb': data.game.away_team_sb,
                    'away_team_errors': data.game.away_team_errors,
                    'away_win': data.game.away_win,
                    'away_loss': data.game.away_loss,
                    'away_games_back': data.game.away_games_back,
                    'away_games_back_wilcared': data.game.away_games_back_wilcared,


                }

            },
            'Status': {
                'status': data.game.status,
                'inning': data.game.inning,
                'ind': data.game.ind,
                'tbd_flag': data.game.tbd_flag,
                'scheduled_innings': data.game.scheduled_innings,
                'outs': data.game.outs,
                'tiebreaker_sw': data.game.tiebreaker_sw,
                'top_inning': data.game.top_inning,
            },
            'Links': {
                'preview_link': data.game.preview_link,
                'home_preview_link': data.game.home_preview_link,
                'away_preview_link': data.game.away_preview_link,
                'away_audio_link': data.game.away_audio_link,
                'wrapup_link': data.game.wrapup_link,
                'mlbtv_link': data.game.mlbtv_link,
                'home_audio_link': data.game.home_audio_link,
            },
            "GameDay": {
                'gameday_link': data.game.gameday_link,
                'gameday_sw': data.game.gameday_sw,
                'tv_station': data.game.tv_station,
            },

        }

}

exports.Team = function (data) {
    return {

        "MLB_id": data.game.home_team_id,
        "Name": data.game.home_team_name,
        "ShortName": data.game.home_name_abbrev,
        "City": data.game.home_team_city,
        "Code": data.game.home_code,
        "Sport_Code": data.game.home_sport_code,
        "File_Code": data.game.home_file_code,
        "League_id": data.game.home_league_id,
        "Division": data.game.home_division

        }


}

function Location(data){

    return {
        "MLB_id":data.game.venue_id,
        "Venue":data.game.venue,
        "Location": data.game.location,
        "venue_w_chane_loc":data.game.venue_w_chan_loc,
        "League_id": data.game.home_league_id
    }
}

// var g = { "game":{"home_team_runs":"3","preview_link":"/mlb/gameday/index.jsp?gid=2015_07_14_aasmlb_nasmlb_1&mode=preview&c_id=mlb","game_type":"A","double_header_sw":"N","location":"Cincinnati, OH","away_time":"7:00","away_preview_link":"/mlb/gameday/index.jsp?gid=2015_07_14_aasmlb_nasmlb_1&mode=preview&c_id=mlb","away_audio_link":"bam.media.launchPlayer({calendar_event_id:'14-414988-2015-07-14',media_type:'audio'})","time":"7:00","top_inning":"N","home_time":"7:00","home_team_sb":"1","home_team_name":"National","away_team_hr":"2","ind":"F","description":"86th All-Star Game, at Great American Ball Park","original_date":"2015/07/14","home_team_city":"NL All-Stars","venue_id":"2602","home_team_so":"15","gameday_sw":"P","away_win":"1","away_team_id":"159","tz_hm_lg_gen":"ET","status":"Final","home_loss":"1","home_code":"nas","away_sport_code":"mlb","home_team_hr":"1","home_win":"0","time_hm_lg":"7:00","away_name_abbrev":"AL","league":"AN","time_zone_aw_lg":"-4","home_file_code":"nl","game_data_directory":"/components/game/mlb/year_2015/month_07/day_14/gid_2015_07_14_aasmlb_nasmlb_1","time_zone":"ET","away_league_id":"103","home_team_id":"160","time_aw_lg":"7:00","away_team_city":"AL All-Stars","day":"TUE","tbd_flag":"N","tz_aw_lg_gen":"ET","away_code":"aas","game_media":{"media":[{"free":"NO","title":"AL @ NL","thumbnail":"http://mediadownloads.mlb.com/mlbam/preview/aasnas_414988_th_7_preview.jpg","media_state":"media_archive","start":"2015-07-14T19:00:00-0400","has_mlbtv":"true","calendar_event_id":"14-414988-2015-07-14","enhanced":"N","type":"game"},{"headline":"Trout's ASG career cycle","thumbnail":"http://mediadownloads.mlb.com/mlbam/2015/07/15/images/mlbf_260129883_th_43.jpg","content_id":"260129883","topic_id":"","type":"vpp"}]},"game_nbr":"1","time_date_aw_lg":"2015/07/14 7:00","away_team_sb":"1","scheduled_innings":"9","venue_w_chan_loc":"USOH0188","first_pitch_et":"7:00","away_team_so":"9","away_team_name":"American","gameday_link":"2015_07_14_aasmlb_nasmlb_1","outs":"3","time_date_hm_lg":"2015/07/14 7:00","id":"2015/07/14/aasmlb-nasmlb-1","home_name_abbrev":"NL","wrapup_link":"/mlb/gameday/index.jsp?gid=2015_07_14_aasmlb_nasmlb_1&mode=wrap&c_id=mlb","tiebreaker_sw":"N","ampm":"PM","home_time_zone":"ET","tv_station":"FOX","away_team_errors":"2","away_team_runs":"6","mlbtv_link":"bam.media.launchPlayer({calendar_event_id:'14-414988-2015-07-14',media_type:'video'})","away_time_zone":"ET","home_audio_link":"bam.media.launchPlayer({calendar_event_id:'14-414988-2015-07-14',media_type:'audio'})","hm_lg_ampm":"PM","home_sport_code":"mlb","time_date":"2015/07/14 7:00","inning":"9","home_team_hits":"6","home_ampm":"PM","game_pk":"414988","venue":"Great American Ball Park","home_league_id":"104","away_team_hits":"7","away_loss":"0","home_team_errors":"0","away_file_code":"al","aw_lg_ampm":"PM","home_preview_link":"/mlb/gameday/index.jsp?gid=2015_07_14_aasmlb_nasmlb_1&mode=preview&c_id=mlb","time_zone_hm_lg":"-4","away_ampm":"PM"},"date":"20150714"}
// test_1=Game(g)
// console.log(test_1.game_pk)
// test_2=Location(g)
// console.log(test_2)

