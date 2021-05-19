# Copyright (c) 2021, Harshit and Anmol and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class IssuedtoProcess(Document):
	def before_save(doc):
		taga_table = doc.taga_table

		
		#Calculate Taga Metres and Taga Weight
		total_metres = 0
		# total_weight = 0
		for i in range(len(taga_table)):
			try:
				total_metres += float(taga_table[i].taga_metre)
			except:
				print("Invalid Number")

			# try:
			# 	total_weight += float(taga_table[i].taga_weight)
			# except:
			# 	print("Invalid Number")

		doc.total_metres = total_metres
		# doc.total_weight = total_weight
