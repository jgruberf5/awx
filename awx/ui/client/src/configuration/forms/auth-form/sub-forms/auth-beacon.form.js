/*************************************************
 * Copyright (c) 2016 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

export default ['i18n', function(i18n) {
    return {
        // editTitle: 'Authorization Configuration',
        name: 'configuration_beacon_template',
        showActions: true,
        showHeader: false,

        fields: {
            BEACON_AUTH_URL: {
                type: 'text',
                reset: 'BEACON_AUTH_URL'
            },
            BEACON_USER_URL: {
                type: 'text',
                reset: 'BEACON_USER_URL'
            },
            BEACON_ACCOUNT_URL: {
                type: 'text',
                reset: 'BEACON_ACCOUNT_URL'
            }
        },

        buttons: {
            reset: {
                ngShow: '!user_is_system_auditor',
                ngClick: 'vm.resetAllConfirm()',
                label: i18n._('Revert all to default'),
                class: 'Form-resetAll'
            },
            cancel: {
                ngClick: 'vm.formCancel()',
            },
            save: {
                ngClick: 'vm.formSave()'
            }
        }
    };
}
];
