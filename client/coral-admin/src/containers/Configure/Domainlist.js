import React from 'react';
import {Card} from 'coral-ui';
import styles from './Configure.css';
import TagsInput from 'react-tagsinput';

import I18n from 'coral-framework/modules/i18n/i18n';
import translations from '../../translations.json';
const lang = new I18n(translations);

const Domainlist = ({domains, onChangeDomainlist}) => {
  return (
    <div>
      <h3>{lang.t('configure.domain-list-title')}</h3>
      <Card id={styles.domainlist}>
        <p className={styles.domainlistDesc}>{lang.t('configure.domain-list-text')}</p>
        <TagsInput
          value={domains}
          inputProps={{placeholder: 'URL'}}
          addOnPaste={true}
          pasteSplit={data => data.split(',').map(d => d.trim())}
          onChange={tags => onChangeDomainlist('whitelist', tags)}
        />
      </Card>
    </div>
  );
};

export default Domainlist;