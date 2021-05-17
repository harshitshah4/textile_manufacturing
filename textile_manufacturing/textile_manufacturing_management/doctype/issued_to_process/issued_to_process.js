// Copyright (c) 2021, Harshit and Anmol and contributors
// For license information, please see license.txt

frappe.ui.form.on('Issued to Process', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('Taga Link', {
	'taga_metre': function(frm,cdt,cdn) {
		const taga_details = frm.doc.taga_table;
		var total_metres = 0;
		
		for(const i in taga_details){
			total_metres += taga_details[i].taga_metre;
		}

		frm.set_value('total_metres',total_metres);
	}

});