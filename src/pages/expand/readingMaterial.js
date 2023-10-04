import { Typography } from 'antd'
import styles from '../faq/faq.module.scss'
import {
  LeftEconomicsRM,
  RaceAndEthnicityRM,
  RightEconomicsRM,
  AuthorityRespectingRM,
  LibertyLovingRM,
  ProgressiveRM,
  TraditionalRM,
  EconomicsRM,
  EducationRM,
  HealthCareRM,
  NationalSecurityRM,
  InternationalRelationsRM,
} from './readingMaterialDirectory'

const { Paragraph } = Typography

const LeftEconomics = (
  <div className={styles.section}>
    {LeftEconomicsRM.map(({ author, title, description, href }) => (
      <ul key={title}>
        <li>
          <Paragraph>
            {author === '' ? '' : `${author} - `}
            <a target="_blank" rel="noreferrer" href={href}>
              {title}
            </a>
          </Paragraph>
          <Paragraph className={styles['expand-info']}>{description}</Paragraph>
        </li>
      </ul>
    ))}
  </div>
)

const RightEconomics = (
  <div className={styles.section}>
    {RightEconomicsRM.map(({ author, title, description, href }) => (
      <ul key={title}>
        <li>
          <Paragraph>
            {author === '' ? '' : `${author} - `}
            <a target="_blank" rel="noreferrer" href={href}>
              {title}
            </a>
          </Paragraph>
          <Paragraph className={styles['expand-info']}>{description}</Paragraph>
        </li>
      </ul>
    ))}
  </div>
)

const AuthorityRespecting = (
  <div className={styles.section}>
    {AuthorityRespectingRM.map(({ author, title, description, href }) => (
      <ul key={title}>
        <li>
          <Paragraph>
            {author === '' ? '' : `${author} - `}
            <a target="_blank" rel="noreferrer" href={href}>
              {title}
            </a>
          </Paragraph>
          <Paragraph className={styles['expand-info']}>{description}</Paragraph>
        </li>
      </ul>
    ))}
  </div>
)

const LibertyLoving = (
  <div className={styles.section}>
    {LibertyLovingRM.map(({ author, title, description, href }) => (
      <ul key={title}>
        <li>
          <Paragraph>
            {author === '' ? '' : `${author} - `}
            <a target="_blank" rel="noreferrer" href={href}>
              {title}
            </a>
          </Paragraph>
          <Paragraph className={styles['expand-info']}>{description}</Paragraph>
        </li>
      </ul>
    ))}
  </div>
)

const Progressive = (
  <div className={styles.section}>
    {ProgressiveRM.map(({ author, title, description, href }) => (
      <ul key={title}>
        <li>
          <Paragraph>
            {author === '' ? '' : `${author} - `}
            <a target="_blank" rel="noreferrer" href={href}>
              {title}
            </a>
          </Paragraph>
          <Paragraph className={styles['expand-info']}>{description}</Paragraph>
        </li>
      </ul>
    ))}
  </div>
)

const Traditional = (
  <div className={styles.section}>
    {TraditionalRM.map(({ author, title, description, href }) => (
      <ul key={title}>
        <li>
          <Paragraph>
            {author === '' ? '' : `${author} - `}
            <a target="_blank" rel="noreferrer" href={href}>
              {title}
            </a>
          </Paragraph>
          <Paragraph className={styles['expand-info']}>{description}</Paragraph>
        </li>
      </ul>
    ))}
  </div>
)

const Economics = (
  <div className={styles.section}>
    {EconomicsRM.map(({ author, title, description, href }) => (
      <ul key={title}>
        <li>
          <Paragraph>
            {author === '' ? '' : `${author} - `}
            <a target="_blank" rel="noreferrer" href={href}>
              {title}
            </a>
          </Paragraph>
          <Paragraph className={styles['expand-info']}>{description}</Paragraph>
        </li>
      </ul>
    ))}
  </div>
)

const RaceAndEthnicity = (
  <div className={styles.section}>
    {RaceAndEthnicityRM.map(({ author, title, description, href }) => (
      <ul key={title}>
        <li>
          <Paragraph>
            {author === '' ? '' : `${author} - `}
            <a target="_blank" rel="noreferrer" href={href}>
              {title}
            </a>
          </Paragraph>
          <Paragraph className={styles['expand-info']}>{description}</Paragraph>
        </li>
      </ul>
    ))}
  </div>
)

const HealthCare = (
  <div className={styles.section}>
    {HealthCareRM.map(({ author, title, description, href }) => (
      <ul key={title}>
        <li>
          <Paragraph>
            {author === '' ? '' : `${author} - `}
            <a target="_blank" rel="noreferrer" href={href}>
              {title}
            </a>
          </Paragraph>
          <Paragraph className={styles['expand-info']}>{description}</Paragraph>
        </li>
      </ul>
    ))}
  </div>
)

const Education = (
  <div className={styles.section}>
    {EducationRM.map(({ author, title, description, href }) => (
      <ul key={title}>
        <li>
          <Paragraph>
            {author === '' ? '' : `${author} - `}
            <a target="_blank" rel="noreferrer" href={href}>
              {title}
            </a>
          </Paragraph>
          <Paragraph className={styles['expand-info']}>{description}</Paragraph>
        </li>
      </ul>
    ))}
  </div>
)

const NationalSecurity = (
  <div className={styles.section}>
    {NationalSecurityRM.map(({ author, title, description, href }) => (
      <ul key={title}>
        <li>
          <Paragraph>
            {author === '' ? '' : `${author} - `}
            <a target="_blank" rel="noreferrer" href={href}>
              {title}
            </a>
          </Paragraph>
          <Paragraph className={styles['expand-info']}>{description}</Paragraph>
        </li>
      </ul>
    ))}
  </div>
)

const InternationalRelations = (
  <div className={styles.section}>
    {InternationalRelationsRM.map(({ author, title, description, href }) => (
      <ul key={title}>
        <li>
          <Paragraph>
            {author === '' ? '' : `${author} - `}
            <a target="_blank" rel="noreferrer" href={href}>
              {title}
            </a>
          </Paragraph>
          <Paragraph className={styles['expand-info']}>{description}</Paragraph>
        </li>
      </ul>
    ))}
  </div>
)

const PluralPoliticsResearch = (
  <div className={styles.section}>
    <ul>
      <li>
        <Paragraph>
          Take a look at research conducted using Plural Politics data on Medium
          -{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/@pluralpolitics122"
          >
            Plural Politics
          </a>
        </Paragraph>
      </li>
    </ul>
  </div>
)

export {
  LeftEconomics,
  RightEconomics,
  AuthorityRespecting,
  LibertyLoving,
  Progressive,
  Traditional,
  Economics,
  RaceAndEthnicity,
  HealthCare,
  Education,
  NationalSecurity,
  InternationalRelations,
  PluralPoliticsResearch,
}
