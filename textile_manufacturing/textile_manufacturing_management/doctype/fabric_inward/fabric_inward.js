// Copyright (c) 2021, Harshit and Anmol and contributors
// For license information, please see license.txt

frappe.ui.form.on('Fabric Inward', {
	'before_save':function(frm) {
		console.log("Helllooooo")
		const taga_details = frm.doc.taga_table;


		for(const i in taga_details){
			console.log(taga_details[i].name)
		}

	}
});


frappe.ui.form.on('Taga', {
	'taga_metre': function(frm,cdt,cdn) {
		const taga_details = frm.doc.taga_table;
		var total_metres = 0;
		
		for(const i in taga_details){
			total_metres += taga_details[i].taga_metre;
		}

		frm.set_value('total_metres',total_metres);
	},
	'taga_weight': function(frm,cdt,cdn) {
		const taga_details = frm.doc.taga_table;
		var total_weight = 0;
		
		for(const i in taga_details){
			total_weight += taga_details[i].taga_weight;
		}
	
		frm.set_value('total_weight',total_weight);
	}

});