
SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").SAPGuiOKCode("OKCode").Set "/NMM01" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf1.xml_;_
SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf1.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Material (Initial").SAPGuiEdit("Material").Set DataTable("Material_number", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Material (Initial").SAPGuiComboBox("Industry sector").Select "Pharmaceuticals" @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Material (Initial").SAPGuiComboBox("Material Type").Select "Additionals" @@ hightlight id_;_3_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Material (Initial").SAPGuiComboBox("Material Type").SetFocus @@ hightlight id_;_3_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Material (Initial").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Select View(s)").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf3.xml_;_
wait 2
SAPGuiSession("Session").SAPGuiWindow("Create Material MIC_MAT_000004").SAPGuiEdit("Material").Set "MIC_Mat_000004" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf4.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Material MIC_MAT_000004").SAPGuiEdit("Base Unit of Measure").Set "PC" @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf4.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Material MIC_MAT_000004").SAPGuiEdit("Base Unit of Measure").SetFocus @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf4.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Material MIC_MAT_000004").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf4.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Material MIC_MAT_000004").SAPGuiButton("Save   (Ctrl+S)").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf5.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Material (Initial").SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf6.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Material (Initial").SAPGuiStatusBar("StatusBar").Check CheckPoint("StatusBar") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf7.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Material (Initial").SAPGuiStatusBar("StatusBar").Output CheckPoint("StatusBar_2") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf8.xml_;_


