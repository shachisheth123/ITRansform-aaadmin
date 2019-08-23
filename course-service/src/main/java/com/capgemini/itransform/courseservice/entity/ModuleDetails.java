package com.capgemini.itransform.courseservice.entity;

public class ModuleDetails {

	private String title;
	private String description;
	private String moduleImage;
	private SubModule subModule[];
	private String codesnippet;
	private String youtubelink;
	
	public ModuleDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public ModuleDetails(String title, String description, String moduleImage, SubModule[] subModule,
			String codesnippet, String youtubelink) {
		super();
		this.title = title;
		this.description = description;
		this.moduleImage = moduleImage;
		this.subModule = subModule;
		this.codesnippet = codesnippet;
		this.youtubelink = youtubelink;
	}




	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public String getCodesnippet() {
		return codesnippet;
	}

	public void setCodesnippet(String codesnippet) {
		this.codesnippet = codesnippet;
	}

	public String getYoutubelink() {
		return youtubelink;
	}

	public void setYoutubelink(String youtubelink) {
		this.youtubelink = youtubelink;
	}



	public SubModule[] getSubModule() {
		return subModule;
	}



	public void setSubModule(SubModule[] subModule) {
		this.subModule = subModule;
	}



	public String getModuleImage() {
		return moduleImage;
	}



	public void setModuleImage(String moduleImage) {
		this.moduleImage = moduleImage;
	}
	
	
	
	
}
