# Copyright (c) 2021, Harshit and Anmol and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class FabricInward(Document):
	def before_save(doc):
		taga_table = doc.taga_table
		new_taga_table = taga_table

		for i in range(len(taga_table)):
			
			new_taga_table[i].name = f'{taga_table[i].parent} - {taga_table[i].idx}'

			new_taga_table[i].taga_barcode = new_taga_table[i].name


		doc.taga_table = new_taga_table
