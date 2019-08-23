package com.capgemini.itransform.userservice.entity;

public class ChapterModule {
	private int moduleId;
	private String moduleName;
	private ModuleDetails moduleDetails[];
	private boolean isComplete;
	
	public ChapterModule() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ChapterModule(int moduleId, String moduleName, ModuleDetails[] moduleDetails, boolean isComplete) {
		super();
		this.moduleId = moduleId;
		this.moduleName = moduleName;
		this.moduleDetails = moduleDetails;
		this.isComplete = isComplete;
	}

	public int getModuleId() {
		return moduleId;
	}

	public void setModuleId(int moduleId) {
		this.moduleId = moduleId;
	}

	public String getModuleName() {
		return moduleName;
	}

	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}

	public ModuleDetails[] getModuleDetails() {
		return moduleDetails;
	}

	public void setModuleDetails(ModuleDetails[] moduleDetails) {
		this.moduleDetails = moduleDetails;
	}

	public boolean isComplete() {
		return isComplete;
	}

	public void setComplete(boolean isComplete) {
		this.isComplete = isComplete;
	}

	
		
}
