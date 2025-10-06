.PHONY: create-migrations
create-migrations:
	lein migratus create $(NAME)

.PHONY: migrate
migrate:
	lein migratus migrate

.PHONY: migrate-rollback
migrate:
	lein migratus rollback
	
.PHONY: server-run
server-run:
	lein run

.PHONY: client-run
client-run:
	npx shadow-cljs watch app