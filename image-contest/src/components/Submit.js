import React from 'react';
import Header from './Header';
import ContestNavigation from './ContestNavigation';
import Contact from './Contact';
import Footer from './Footer';
import { withRouter } from 'react-router-dom';

class UploadImage extends React.Component {
	goToContest(e) {
    e.preventDefault();
	this.props.history.push('/image-contest/vote');
	
  }
  render() {
    return (
		<div>
			<Header />
			<ContestNavigation location={this.props.location}/>
			<div id="rn_PageContent" className="rn_AskQuestion">
			<div className="rn_Padding" id="yui_3_17_2_3_1505105476525_15">
				<div className="empty">
				</div>
				<h1 className="submit-title">Submit your Image or Video!</h1>
				<form id="rn_QuestionSubmit" method="#" onSubmit={(e)=> this.goToContest(e)}>
					<div id="rn_ErrorLocation"></div>
					<div id="rn_TextInput_10" className="rn_TextInput rn_Input">
						<div id="rn_TextInput_10_LabelContainer">
							<label htmlFor="rn_TextInput_10_Incident.Subject" id="rn_TextInput_10_Label" className="rn_Label">
								Title:<span className="rn_Required" aria-label="Required"></span></label>
						</div>
						<select name="rn_TextInput_10_Incident.Subject" id="title" tabIndex='1' autoFocus>
							<option defaultValue="Select Title">Select Title</option>
							<option defaultValue="Miss">Miss</option>
							<option defaultValue="Ms">Ms</option>
							<option defaultValue="Mr">Mr</option>
							<option defaultValue="Sir">Sir</option>
							<option defaultValue="Mrs">Mrs</option>
							<option defaultValue="Dr">Dr</option>
						</select>
						<div id="rn_TextInput_10_LabelContainer">
							<label htmlFor="rn_TextInput_10_Incident.Subject" id="rn_TextInput_10_Label" className="rn_Label">
								Author's Full Name:<span className="rn_Required" aria-label="Required"></span></label>
						</div>
						<input type="text" id="rn_TextInput_10_Incident.Subject" name="Incident.Subject" className="rn_Text" maxLength="240" required="" placeholder='Your full name'/>
						<div id="rn_TextInput_10_LabelContainer">
							<label htmlFor="rn_TextInput_10_Incident.Subject" id="rn_TextInput_10_Label" className="rn_Label">
								Category:<span className="rn_Required" aria-label="Required"></span></label>
						</div>
						<select id="category">
							<option defaultValue="Choose a category">Choose a category</option>
							<option defaultValue="Synaptic Functions">Synaptic Functions</option>
							<option defaultValue="Neurogenesis and Neuronal Survival">Neurogenesis and Neuronal Survival</option>
							<option defaultValue="Neuronal Development and Connectivity">Neuronal Development and Connectivity</option>
							<option defaultValue="Computation and Neuronal Circuits">Computation and Neuronal Circuits</option>
						</select>
						<div id="rn_TextInput_10_LabelContainer">
							<label htmlFor="rn_TextInput_10_Incident.Subject" id="rn_TextInput_10_Label" className="rn_Label">
								Short display description:<span className="rn_Required" aria-label="Required"></span></label>
						</div>
						<textarea id="rn_TextInput_12_Incident.Threads" className="rn_TextArea" rows="7" cols="60" name="Incident.Threads" maxLength="60" required="" placeholder='This short description will be displayed in the image info-cards in the voting section.'></textarea>
					</div>
					<div id="rn_TextInput_12" className="rn_TextInput rn_Input">
						<div id="rn_TextInput_12_LabelContainer">
							<label htmlFor="rn_TextInput_12_Incident.Threads" id="rn_TextInput_12_Label" className="rn_Label">
								Your detailed description:<span className="rn_Required" aria-label="Required"></span></label>
						</div>
						<textarea id="rn_TextInput_12_Incident.Threads" className="rn_TextArea" rows="7" cols="60" name="Incident.Threads" maxLength="1048576" required="" placeholder='This detailed description will be displayed in the image full screen view.'></textarea>
					</div>
					<div id="rn_FileAttachmentUpload_14" className="rn_FileAttachmentUpload rn_Input">
						<div id="rn_FileAttachmentUpload_14_LabelContainer">
							<label htmlFor="rn_FileAttachmentUpload_14_FileInput" id="rn_FileAttachmentUpload_14_Label">Attach your Image/Video</label>
						</div>
						<input name="file" id="rn_FileAttachmentUpload_14_FileInput" type="file" aria-labelledby="rn_FileAttachmentUpload_14_Label" accept="image/gif, image/jpeg, image/png" />
						<span id="rn_FileAttachmentUpload_14_StatusMessage"></span>
					</div>
					<div id="rn_FormSubmit_15" className="rn_FormSubmit">
						<button type="submit" id="rn_FormSubmit_15_Button">Submit</button>
					</div>
				</form>
			</div>
			</div>
       		<Contact />
        	<Footer />
      	</div>
	  );

	}
}
 
export default withRouter(UploadImage); 
  
  
