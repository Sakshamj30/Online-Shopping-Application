package in.codevita.onlineshoppingapi.exception;

public class CustomerIdExceptionResponse {

	private String email;

	public CustomerIdExceptionResponse(String email)
	{
		super();
		this.email = email;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
