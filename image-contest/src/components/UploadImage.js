import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Contact from './Contact';
import Footer from './Footer';
import { withRouter } from 'react-router-dom';

class UploadImage extends React.Component {
	goToContest(e) {
    e.preventDefault();
    this.props.history.push('/image-contest');
  }
  render() {
    return (
      <div>
        <Header />
        <Navigation />
		<div id="rn_PageContent" className="rn_AskQuestion">
			
			<div className="rn_Padding" id="yui_3_17_2_3_1505105476525_15">
				<div className="empty">
				</div>
				<h1 className="title">Upload competition product</h1>
				<div className="uq-required-msg"><span className="rn_required">*&nbsp;</span>tips:you can upload image and video to join the competition
				</div>
				<form id="rn_QuestionSubmit" method="#" onSubmit={(e) => this.goToContest(e)}>
					<div id="rn_ErrorLocation"></div>
					<div className="rn_TextInput rn_Input" id="uploadimage">
							<img id="image1" src="https://camo.githubusercontent.com/f8ea5eab7494f955e90f60abc1d13f2ce2c2e540/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323037383234352f3235393331332f35653833313336322d386362612d313165322d383435332d6536626439353663383961342e706e67" alt="upload.jpg"/>
						</div>
					<div id="rn_TextInput_10" className="rn_TextInput rn_Input">
						<div id="rn_TextInput_10_LabelContainer">
							<label for="rn_TextInput_10_Incident.Subject" id="rn_TextInput_10_Label" className="rn_Label">
								Title:<span className="rn_Required" aria-label="Required"></span></label>
						</div>
						<input type="text" id="rn_TextInput_10_Incident.Subject" name="Incident.Subject" className="rn_Text" maxlength="240" required=""/>
						
						<div id="rn_TextInput_10_LabelContainer">
							<label for="rn_TextInput_10_Incident.Subject" id="rn_TextInput_10_Label" className="rn_Label">
								Author Name:<span className="rn_Required" aria-label="Required"></span></label>
						</div>
						<input type="text" id="rn_TextInput_10_Incident.Subject" name="Incident.Subject" className="rn_Text" maxlength="240" required=""/>
						
						<div id="rn_TextInput_10_LabelContainer">
							<label for="rn_TextInput_10_Incident.Subject" id="rn_TextInput_10_Label" className="rn_Label">
								Category:<span className="rn_Required" aria-label="Required"></span></label>
						</div>
						<select id="category">
							<option value=""></option>
							<option value="Synaptic Functions">Synaptic Functions</option>
							<option value="Neurogenesis and Neuronal Survival">Neurogenesis and Neuronal Survival</option>
							<option value="Neuronal Development and Connectivity">Neuronal Development and Connectivity</option>
							<option value="Computation and Neuronal Circuits">Computation and Neuronal Circuits</option>
						</select>
						<div id="rn_TextInput_10_LabelContainer">
							<label for="rn_TextInput_10_Incident.Subject" id="rn_TextInput_10_Label" className="rn_Label">
								Summary:<span className="rn_Required" aria-label="Required"></span></label>
						</div>
						<input type="text" id="rn_TextInput_10_Incident.Subject" name="Incident.Subject" className="rn_Text" maxlength="240" required=""/>
					</div>
					<div id="rn_TextInput_12" className="rn_TextInput rn_Input">
						<div id="rn_TextInput_12_LabelContainer">
							<label for="rn_TextInput_12_Incident.Threads" id="rn_TextInput_12_Label" className="rn_Label">
							Your detailed description:<span className="rn_Required" aria-label="Required"></span></label>
						</div>
						<textarea id="rn_TextInput_12_Incident.Threads" className="rn_TextArea" rows="7" cols="60" name="Incident.Threads" maxlength="1048576" required=""></textarea>
					</div>
					<div id="rn_FileAttachmentUpload_14" className="rn_FileAttachmentUpload rn_Input">
				
				<div id="rn_FileAttachmentUpload_14_LabelContainer">
					<label for="rn_FileAttachmentUpload_14_FileInput" id="rn_FileAttachmentUpload_14_Label">Attach Documents</label>
				</div>
					<input name="file" id="rn_FileAttachmentUpload_14_FileInput" type="file" aria-labelledby="rn_FileAttachmentUpload_14_Label" accept="image/gif, image/jpeg, image/png"/>
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
  
  
