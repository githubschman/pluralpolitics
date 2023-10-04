import { RoughNotation } from 'react-rough-notation'
import styles from './results.module.scss'

export const expansivenessLevels = [
  'Very Moderate',
  'Moderate',
  'Strong',
  'Very Strong',
]

export const expansivenessInfo = {
  'Very Strong': (
    <div>
      This is a measure of the overall{' '}
      <span className={styles['annotate-title-mobile']}>breadth</span>
      <RoughNotation
        className={styles['annotate-title-desktop']}
        animate
        animationDelay="2000"
        show
        type="highlight"
        color="#00a6ad"
        strokeWidth={3}
      >
        <span className={styles['italics-text']}>breadth</span>
      </RoughNotation>{' '}
      of your results. You can think of this as a measure of how readily you
      adopt political views. Your politics are{' '}
      <span className={styles['bold-text']}>very strong</span>. This means you
      put yourself out there. You take stands. You’re not afraid to assert what
      might be done, and you’re eager to actually go for it.
    </div>
  ),
  Strong: (
    <div>
      This is a measure of the overall{' '}
      <span className={styles['annotate-title-mobile']}>breadth</span>
      <RoughNotation
        className={styles['annotate-title-desktop']}
        animate
        animationDelay="2000"
        show
        type="highlight"
        color="#00a6ad"
        strokeWidth={3}
      >
        <span className={styles['italics-text']}>breadth</span>
      </RoughNotation>{' '}
      of your results. You can think of this as a measure of how readily you
      adopt political views. Your politics are{' '}
      <span className={styles['bold-text']}>strong</span>. This means you’re not
      afraid to put yourself out there and make claims. If something makes
      sense, you see no harm trying it out.
    </div>
  ),
  Moderate: (
    <div>
      This is a measure of the overall{' '}
      <span className={styles['annotate-title-mobile']}>breadth</span>
      <RoughNotation
        className={styles['annotate-title-desktop']}
        animate
        animationDelay="2000"
        show
        type="highlight"
        color="#00a6ad"
        strokeWidth={3}
      >
        <span className={styles['italics-text']}>breadth</span>
      </RoughNotation>{' '}
      of your results. You can think of this as a measure of how readily you
      adopt political views. Your politics are{' '}
      <span className={styles['bold-text']}>moderate</span>. This means you
      perceive limits. You hedge your bets. While you’re not against making
      political moves sometimes, you’re cautious about extending too far.
    </div>
  ),
  'Very Moderate': (
    <div>
      This is a measure of the overall{' '}
      <span className={styles['annotate-title-mobile']}>breadth</span>
      <RoughNotation
        className={styles['annotate-title-desktop']}
        animate
        animationDelay="2000"
        show
        type="highlight"
        color="#00a6ad"
        strokeWidth={3}
      >
        <span className={styles['italics-text']}>breadth</span>
      </RoughNotation>{' '}
      of your results. You can think of this as a measure of how readily you
      adopt political views. Your politics are{' '}
      <span className={styles['bold-text']}>very moderate</span>. This means you
      perceive very hard limits. You hedge your bets. You resist making grand
      claims and you’re skeptical of broad, transformative action.
    </div>
  ),
}

export const viewpointDiversityLevels = [
  'Very Eclectic',
  'Eclectic',
  'Exclusive',
  'Very Exclusive',
]

export const viewpointDiversityInfo = {
  'Very Eclectic': (
    <div>
      Viewpoint diversity refers to how closely your results hang together. You
      can think of this as a measure of your political{' '}
      <span className={styles['annotate-title-mobile']}>symmetry</span>
      <RoughNotation
        className={styles['annotate-title-desktop']}
        animate
        animationDelay="2000"
        show
        type="highlight"
        color="#00a6ad"
        strokeWidth={3}
      >
        <span className={styles['italics-text']}>symmetry</span>
      </RoughNotation>
      . Your viewpoint diversity is{' '}
      <span className={styles['bold-text']}>very eclectic</span>. This means
      you’re eager to consider all points of view. You’re very balanced in what
      you bring to the table. “Black cat or white cat, if it can catch mice,
      it’s a good cat.”
    </div>
  ),
  Eclectic: (
    <div>
      Viewpoint diversity refers to how closely your results hang together. You
      can think of this as a measure of your political{' '}
      <span className={styles['annotate-title-mobile']}>symmetry</span>
      <RoughNotation
        className={styles['annotate-title-desktop']}
        animate
        animationDelay="2000"
        show
        type="highlight"
        color="#00a6ad"
        strokeWidth={3}
      >
        <span className={styles['italics-text']}>symmetry</span>
      </RoughNotation>
      . Your viewpoint diversity is{' '}
      <span className={styles['bold-text']}>eclectic</span>. This means you’re
      not afraid to consider all points of view. Everything’s on the table.
    </div>
  ),
  Exclusive: (
    <div>
      Viewpoint diversity refers to how closely your results hang together. You
      can think of this as a measure of your political{' '}
      <span className={styles['annotate-title-mobile']}>symmetry</span>
      <RoughNotation
        className={styles['annotate-title-desktop']}
        animate
        animationDelay="2000"
        show
        type="highlight"
        color="#00a6ad"
        strokeWidth={3}
      >
        <span className={styles['italics-text']}>symmetry</span>
      </RoughNotation>
      . Your viewpoint diversity is{' '}
      <span className={styles['bold-text']}>exclusive</span>. You lean away from
      certain lines of thinking. You have a strong idea of what is likely to
      work and you’re hesitant about pursuing alternative routes.
    </div>
  ),
  'Very Exclusive': (
    <div>
      Viewpoint diversity refers to how closely your results hang together. You
      can think of this as a measure of your political{' '}
      <span className={styles['annotate-title-mobile']}>symmetry</span>
      <RoughNotation
        className={styles['annotate-title-desktop']}
        animate
        animationDelay="2000"
        show
        type="highlight"
        color="#00a6ad"
        strokeWidth={3}
      >
        <span className={styles['italics-text']}>symmetry</span>
      </RoughNotation>
      . Your viewpoint diversity is very{' '}
      <span className={styles['bold-text']}>exclusive</span>. This means you
      lean strongly away from certain lines of thinking. You have a very strong
      idea of what’s likely to work and you reject alternative routes.
    </div>
  ),
}

export const labels = {
  'Moderate Eclectic': 'Moderate Centrist',
  'Strong Eclectic': 'Expansive Pluralist',
  'Moderate Exclusive': 'Advocate',
  'Strong Exclusive': 'Ideologue',
}

export const labelInfo = {
  'Moderate Centrist': (
    <div>
      You’re a person who’s wary of big moves and big statements. You believe
      everyone has some good points and some bad points, and it’s hard to tell
      which is which, so we should take our time and be careful. You might
      sometimes go out and advocate for something impactful, but only in special
      cases.
    </div>
  ),
  'Expansive Pluralist': (
    <div>
      You’re someone who gets excited about all points of view. You dislike
      boxing yourself in with labels. In politics, you’re unconcerned with
      seeming consistent or coherent compared with known political labels.
      You’re not afraid to take strong stances and make big moves in whatever
      direction, regardless of which side endorses it, if it seems right to you.
    </div>
  ),
  Advocate: (
    <div>
      You’re pretty sure about the directions we need to take, being suspicious
      of certain ideologies and confident that your way of thinking is on the
      right track. However, you’re not fully committed - you’re not likely to go
      out and crusade for your point of view except in certain circumstances.
    </div>
  ),
  Ideologue: (
    <div>
      You’re quite sure about the sort of directions we need to take, believing
      strongly in your point of view and applying a robust skepticism toward
      other ideologies that you see as wrongheaded. You’re committed to your
      cause. You are likely an active participant in the political sphere and
      you are an advocate for your beliefs with confidence.
    </div>
  ),
}
