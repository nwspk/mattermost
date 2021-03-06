// Copyright (c) 2017-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getTeams} from 'mattermost-redux/actions/teams';
import {getCurrentTeam} from 'mattermost-redux/selectors/entities/teams';

import {initialize} from 'app/actions/views/load_team';
import {clearNotification, goToNotification} from 'app/actions/views/root';
import {handleTeamChange} from 'app/actions/views/select_team';
import {getTheme} from 'mattermost-redux/selectors/entities/preferences';

import LoadTeam from './load_team';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        config: state.entities.general.config,
        theme: getTheme(state),
        teams: state.entities.teams.teams,
        currentTeam: getCurrentTeam(state),
        myMembers: state.entities.teams.myMembers,
        notification: state.views.notification
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            clearNotification,
            getTeams,
            goToNotification,
            handleTeamChange,
            initialize
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadTeam);
