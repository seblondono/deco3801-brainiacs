import React from 'react';

// Stateless component. To be rendered in about and contact pages
const Navigation = (props) => {
  return (
    <div className="navigation">
    <div className="region region-navigation">
      <div id="block-system-main-menu" className="block block-system block-menu main-menu">
        <div className="main-menu__mobile-menu hide-for-large-up">
          <a href="#none" className="main-menu__mobile-menu-link icon icon-uq-bars-short icon--prefix" title="Menu">Menu</a>
        </div>
        <ul className="menu" id="main-menu">
          <li className="first leaf"><a href="/" className="menu__link active">Home</a></li>
          <li className="expanded"><a href="/about" title="" className="menu__link">About</a>
            <ul className="menu__dropdown"><li className="first leaf"><a href="/people" title="" className="menu__link">Our people</a></li>
              <li className="leaf"><a href="/about/vision-statement" className="menu__link">Vision statement</a></li>
              <li className="leaf"><a href="/partnerships" title="" className="menu__link">Partners</a></li>
              <li className="leaf"><a href="/careers" title="" className="menu__link">Careers</a></li>
              <li className="last leaf"><a href="/annual_reports" title="" className="menu__link">Annual reports</a></li>
            </ul>
          </li>
          <li className="expanded"><a href="/research" className="menu__link">Research</a>
            <ul className="menu__dropdown">
              <li className="first leaf"><a href="/groupleaders" title="" className="menu__link">Research groups</a></li>
              <li className="collapsed"><a href="/researchcentres" title="" className="menu__link">Centres</a></li>
              <li className="leaf"><a href="/research/npj-science-learning" className="menu__link">npj Science of Learning</a></li>
              <li className="leaf"><a href="/publications" title="" className="menu__link">Publications</a></li>
              <li className="leaf"><a href="/journalcovers" title="" className="menu__link">Journal covers</a></li>
              <li className="collapsed"><a href="/facilities" title="" className="menu__link">Facilities</a></li>
              <li className="last leaf"><a href="/ecr" title="" className="menu__link">Early career researchers</a></li>
            </ul>
          </li>
          <li className="expanded"><a href="/study" title="" className="menu__link">Study</a>
            <ul className="menu__dropdown">
              <li className="first leaf"><a href="/study/phd-students" className="menu__link">PhD</a></li>
              <li className="leaf"><a href="/study/master-philosophy-mphil" className="menu__link">MPhil</a></li>
              <li className="leaf"><a href="/study/master-philosophy-mphil-neuroscience" className="menu__link">Master of Philosophy (MPhil) in neuroscience</a></li>
              <li className="leaf"><a href="/study/honours" className="menu__link">Honours</a></li>
              <li className="leaf"><a href="/study/undergraduate-research-programs" className="menu__link">Undergraduate</a></li>
              <li className="last leaf"><a href="/study/scholarships" className="menu__link">Scholarships</a></li>
            </ul>
          </li>
          <li className="expanded"><a href="/brain-basics" title="" className="menu__link">The Brain</a>
            <ul className="menu__dropdown">
              <li className="first expanded"><a href="/brain-basics/brain-physiology" className="menu__link">Brain physiology</a>
                <ul className="menu__dropdown">
                  <li className="first leaf"><a href="/brain-basics/brain/brain-physiology/action-potentials-and-synapses" className="menu__link">Action potentials and synapses</a></li>
                  <li className="leaf"><a href="/brain-basics/brain-physiology/adult-neurogenesis" className="menu__link">Adult neurogenesis</a></li>
                  <li className="leaf"><a href="/brain-basics/brain-physiology/what-neurogenesis" className="menu__link">What is neurogenesis?</a></li>
                  <li className="leaf"><a href="/brain-basics/brain/brain-physiology/what-synaptic-plasticity" className="menu__link">What is synaptic plasticity?</a></li>
                  <li className="leaf"><a href="/brain-basics/brain/brain-physiology/studying-synaptic-plasticity-and-learning" className="menu__link">Studying synaptic plasticity and learning</a></li>
                  <li className="leaf"><a href="/brain-basics/brain/brain-physiology/how-do-neurons-work" className="menu__link">How do neurons work?</a></li>
                  <li className="last leaf"><a href="/brain-basics/brain/brain-physiology/long-term-synaptic-plasticity" className="menu__link">Long-term synaptic plasticity</a></li>
                </ul>
              </li>
              <li className="collapsed"><a href="/brain/brain-anatomy" className="menu__link">Brain anatomy</a></li>
              <li className="collapsed"><a href="/brain-diseases" title="" className="menu__link">Brain diseases and disorders</a></li>
              <li className="leaf"><a href="https://concussion.qbi.uq.edu.au/" title="" className="menu__link">Concussion</a></li>
              <li className="last collapsed"><a href="/learning" title="" className="menu__link">Learning &amp; Memory</a></li>
            </ul>
          </li>
          <li className="expanded"><a href="/news" title="" className="menu__link">News</a>
            <ul className="menu__dropdown">
              <li className="first leaf"><a href="/blogs" title="" className="menu__link">Articles</a></li>
              <li className="expanded"><a href="/podcast" title="" className="menu__link">Podcasts</a>
                <ul className="menu__dropdown">
                  <li className="first leaf"><a href="/news/podcasts/podcast-autism-and-genetics" className="menu__link">Podcast: autism and genetics</a></li>
                  <li className="leaf"><a href="/news/podcasts/podcast-fish-eyes-window-brain" title="" className="menu__link">Podcast: fish eyes the window to the brain</a></li>
                  <li className="leaf"><a href="/podcast/mysteries-corpus-callosum" className="menu__link">Podcast: mysteries of the corpus callosum</a></li>
                  <li className="leaf"><a href="/news/podcasts/podcast-most-aggressive-cancer-brain" className="menu__link">Podcast: the most aggressive cancer in the brain</a></li>
                  <li className="leaf"><a href="/podcast/using-brain-imaging-diagnose-mental-illness" className="menu__link">Podcast: using brain imaging to diagnose mental illness</a></li>
                  <li className="leaf"><a href="/podcast/curing-schizophrenia-bridging-divide-between-lab-and-clinic" className="menu__link">Podcast: curing schizophrenia, from lab to clinic</a></li>
                  <li className="leaf"><a href="/podcast/using-deep-brain-stimulation-treat-parkinson%E2%80%99s-disease" className="menu__link">Podcast: using deep brain stimulation treat Parkinson’s disease</a></li>
                  <li className="leaf"><a href="/podcast/coral-bleaching-great-barrier-reef" className="menu__link">Podcast: coral bleaching in the Great Barrier Reef</a></li>
                  <li className="leaf"><a href="/podcast/curious-link-between-vitamin-d-and-schizophrenia" className="menu__link">Podcast: the curious link between vitamin D and schizophrenia</a></li>
                  <li className="leaf"><a href="/podcast/neuroscience-racism" className="menu__link">Podcast: the neuroscience of racism</a></li>
                  <li className="leaf"><a href="/podcast/alzheimers-disease-family-perspective" className="menu__link">Podcast: Alzheimer&#039;s disease, a family perspective</a></li>
                  <li className="leaf"><a href="/podcast/will-nerve-regeneration-treat-spinal-cord-injury" className="menu__link">Podcast: will nerve regeneration treat spinal cord injury?</a></li>
                  <li className="last leaf"><a href="/podcast/how-i-survived-stroke-31" className="menu__link">Podcast: how I survived a stroke at 31</a></li>
                </ul>
              </li>
              <li className="last leaf"><a href="/interviews" title="" className="menu__link">Meet our researchers</a></li>
            </ul>
          </li>
          <li className="leaf"><a href="/events" className="menu__link">Events</a></li>
          <li className="expanded"><a href="/get-involved" title="" className="menu__link">Get Involved</a>
            <ul className="menu__dropdown">
              <li className="first leaf"><a href="/donate" title="" className="menu__link">Donate to our research</a></li>
              <li className="leaf"><a href="/get-involved/volunteer-research-study" className="menu__link">Volunteer for a study</a></li>
              <li className="leaf"><a href="/get-involved/talks-and-tours" className="menu__link">Talks and tours</a></li>
              <li className="leaf"><a href="/merchandise" className="menu__link">Merchandise</a></li>
              <li className="leaf"><a href="/get-involved/australian-brain-bee-challenge" className="menu__link">Australian Brain Bee</a></li>
              <li className="leaf"><a href="/patient-support" title="" className="menu__link">Support networks</a></li>
              <li className="last leaf"><a href="/get-involved/qbi-newsletters" className="menu__link">Newsletters</a></li>
            </ul>
          </li>
          <li className="last leaf"><a href="/contact" title="" className="menu__link">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}
        
export default Navigation;