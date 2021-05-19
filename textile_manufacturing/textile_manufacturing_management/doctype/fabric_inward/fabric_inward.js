// Copyright (c) 2021, Harshit and Anmol and contributors
// For license information, please see license.txt

frappe.ui.form.on('Fabric Inward', {
	
});


frappe.ui.form.on('Taga', {
	'taga_table_add':function(frm,cdt,cdn){	
		const taga_details = frm.doc.taga_table;
		var total_metres = 0;
		var total_weight = 0;
		
		for(const i in taga_details){
			if(!isNaN(taga_details[i].taga_metre)){
				total_metres += parseFloat(taga_details[i].taga_metre);
			}
			
			if(!isNaN(taga_details[i].taga_weight)){
				total_weight += parseFloat(taga_details[i].taga_weight);
			}
		}

		frm.set_value('total_metres',total_metres);
		frm.set_value('total_weight',total_weight);
	},
	'taga_table_remove':function(frm,cdt,cdn){
		const taga_details = frm.doc.taga_table;
		var total_metres = 0;
		var total_weight = 0;
		
		for(const i in taga_details){
			if(!isNaN(taga_details[i].taga_metre)){
				total_metres += parseFloat(taga_details[i].taga_metre);
			}
			
			if(!isNaN(taga_details[i].taga_weight)){
				total_weight += parseFloat(taga_details[i].taga_weight);
			}
			
		}

		frm.set_value('total_metres',total_metres);
		frm.set_value('total_weight',total_weight);
	},
	'taga_metre': function(frm,cdt,cdn) {
		console.log("Herrree")
		const taga_details = frm.doc.taga_table;
		var total_metres = 0;
		
		for(const i in taga_details){
			if(!isNaN(taga_details[i].taga_metre)){
				total_metres += parseFloat(taga_details[i].taga_metre);
			}
			
			
		}

		frm.set_value('total_metres',total_metres);
	},
	'taga_weight': function(frm,cdt,cdn) {
		const taga_details = frm.doc.taga_table;
		var total_weight = 0;
		
		for(const i in taga_details){
			if(!isNaN(taga_details[i].taga_weight)){
				total_weight += parseFloat(taga_details[i].taga_weight);
			}
		}
	
		frm.set_value('total_weight',total_weight);
	}

});