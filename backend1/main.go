package main

import (
	"encoding/json"
	"net/http"
)

type Owner struct {
	Name             string `json:"name"`
	SlackHelpChannel string `json:"slack-help-channel"`
}

type Person struct {
	ID        int    `json:"id"`
	LastName  string `json:"lastName"`
	FirstName string `json:"firstName"`
	Age       *int   `json:"age"`
}

type DataGridBase struct {
	Title  string `json:"title"`
	Type   string `json:"type"`
	Owner  Owner  `json:"owner"`
	Fields struct {
		Title  string   `json:"title"`
		Values []Person `json:"values"`
	} `json:"fields"`
}

func main() {
	http.HandleFunc("/pessoas", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
		data := DataGridBase{
			Title: "pessoas",
			// Type:  "DataGridBase",
			Type: "DataGridFullname",
			Owner: Owner{
				Name:             "plataforma",
				SlackHelpChannel: "https://gophers.slack.com/archives/C172TMM9V",
			},
		}

		data.Fields.Title = "pessoas1"
		data.Fields.Values = []Person{
			{ID: 1, LastName: "Snow", FirstName: "Jon", Age: intPtr(35)},
			{ID: 2, LastName: "Lannister", FirstName: "Cersei", Age: intPtr(42)},
			{ID: 3, LastName: "Lannister", FirstName: "Jaime", Age: intPtr(45)},
			{ID: 4, LastName: "Stark", FirstName: "Arya", Age: intPtr(16)},
			{ID: 5, LastName: "Targaryen", FirstName: "Daenerys", Age: nil},
			{ID: 6, LastName: "Melisandre", FirstName: "", Age: intPtr(150)},
			{ID: 7, LastName: "Clifford", FirstName: "Ferrara", Age: intPtr(44)},
			{ID: 8, LastName: "Frances", FirstName: "Rossini", Age: intPtr(36)},
			{ID: 9, LastName: "Roxie", FirstName: "Harvey", Age: intPtr(65)},
			{ID: 10, LastName: "Marco", FirstName: "Harvey", Age: intPtr(65)},
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)

		// Encode the data as JSON and write it to the response writer
		json.NewEncoder(w).Encode(data)
	})

	http.ListenAndServe(":8080", nil)
}

func intPtr(i int) *int {
	return &i
}
